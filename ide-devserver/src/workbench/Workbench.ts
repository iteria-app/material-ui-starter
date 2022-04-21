import { CodeRW, CodeDir } from '@iteria-app/generator'
import { IntrospectionQuery } from '@iteria-app/graphql-lowcode'
import { URI } from 'vscode-uri'
import { frontendActions, workbench } from '..'
import { UpdateTranspiledFilesData } from '../bundler'
import { normalizePath } from '../devtools/normalizePath'
import { fetchProjectTar } from '../fetch-project/fetchProjectTar'
import { graphqlCodegen } from '../graphql/generateGraphqlTypesFile'
import { WindowMessaging } from '../messaging'
import {
  FRONTEND_FILE_WRITE,
  GENERATE_GRAPHQL,
  GET_PROJECT_FROM_ARCHIVE,
  UPDATE_TRANSPILED_FILES,
} from '../messaging/messageTypes'
import { IFiles } from '../types'
import { CONFIG_PATH } from '../util/constants'
import { stripExtension } from '../util/strip'
import { VsCodeFSErrors, VSCodeFSTransferableError } from '../vscode/errors'
import { Directory, Entry, File, FileStat, FileType } from '../vscode/vfs'
import {
  notifyVSCodeFrontend,
  uint8ToString,
  transformObjectToUint8Array,
  dispatchFrontendFileWriteAction,
} from './func'

export interface FileWriteData {
  path: string
  data: string
}

export interface FileDeleteData {
  path: string
}

export interface DirectoryFiles {
  fileName?: string
  filePath?: string
}

export interface ProjectLoadedData {
  files: IFiles
}

export type GetProjectZipData = { url: string }

export class DevWorkbench implements CodeRW, CodeDir {
  constructor(
    messagingService: WindowMessaging,
    fsPort?: number,
    files?: IFiles
  ) {
    if (files) {
      this.root = this._transformObjectToFsTree(files)
    }
    this.transpiledFiles = null

    this.messagingService = messagingService
    this.fsPort = fsPort ?? 7500

    this.messagingService.addEventListener<FileWriteData>(
      'FILE_WRITE',
      ({ data, path }) => this.writeFile(path, data)
    )

    this.messagingService.addEventListener<FileWriteData[]>(
      'MULTIPLE_FILE_WRITE',
      (data) => this.writeFiles(data)
    )

    this.messagingService.addEventListener<FileDeleteData[]>(
      'MULTIPLE_FILE_DELETE',
      (data) => this.deleteFiles(data)
    )

    messagingService.addEventListener(GENERATE_GRAPHQL, async () => {
      // TODO await generateGraphqlTypesFile(config, operation)
    })

    messagingService.addEventListener<FileWriteData>(
      FRONTEND_FILE_WRITE,
      async ({ data, path }) => {
        // TODO User can change source file before the Tar.gz is unzipped and files are
        // transpiled. Because of that here function returns early
        // We should provide feedback to the user
        // if (!this.transpiledFiles) return
        if (path.endsWith('.graphql')) {
          files = { ...this.transformFsTreeToObject(this.root), [path]: data }
          this.root = this._transformObjectToFsTree(files)
          notifyVSCodeFrontend(path, data)

          const { generated, generatedFilePath } = await graphqlCodegen({
            workbench,
            files,
            data,
            path,
          })

          this.writeFile(generatedFilePath, generated)
          notifyVSCodeFrontend(path, generated)
        } else {
          frontendActions.transpileSingleFile(path, data, this.transpiledFiles)
        }
      }
    )

    messagingService.addEventListener<GetProjectZipData>(
      GET_PROJECT_FROM_ARCHIVE,
      async ({ url }) => {
        const files = await fetchProjectTar(url, this.injectMode)

        // if (files[CONFIG_PATH]) {
        //   const documents = parseGraphqlDocuments(files)
        //   const config = files[CONFIG_PATH]
        //   const generatedFile = await generateGraphqlTypesFile(
        //     config,
        //     documents
        //   )
        //   console.log('TOOTT', { documents, config, generatedFile })
        //   const { generates } = load(config)
        //   const genFiles = Object.keys(generates ?? {})
        //   const generatedFilePath = genFiles?.length > 0 ? genFiles[0] : ''
        //   const filePath = `/${generatedFilePath}`
        //   files[filePath] = generatedFile
        //   frontendActions.frontendFileWrite(
        //     documents[0].location,
        //     files[documents[0].location]
        //   )
        // }

        this.root = this._transformObjectToFsTree(files)
        frontendActions.projectLoaded(files)
      }
    )

    messagingService.addEventListener<UpdateTranspiledFilesData>(
      UPDATE_TRANSPILED_FILES,
      (transpiledFiles) => (this.transpiledFiles = transpiledFiles)
    )
  }

  private messagingService: WindowMessaging
  private fsPort: number
  public graphQLEndpoint: string
  public introspection: IntrospectionQuery
  public cwd: string
  private injectMode: 'jamstack' | 'devServer' = 'jamstack'

  private transpiledFiles: IFiles | null
  private root: Directory | undefined

  private _renameInTranspiledFiles(oldUri: URI, newUri: URI) {
    const oldPath = stripExtension(oldUri.path)
    const newPath = stripExtension(newUri.path)

    delete Object.assign(this.transpiledFiles, {
      [newPath]: this.transpiledFiles![oldPath],
    })[oldPath]

    if (this.transpiledFiles) frontendActions.bundleFiles(this.transpiledFiles)
  }

  private _deleteInTranspiledFiles(uri: URI) {
    const path = stripExtension(uri.path)
    delete this.transpiledFiles![path]
    if (this.transpiledFiles) frontendActions.bundleFiles(this.transpiledFiles)
  }

  async readFile(path: string, encoding?: string) {
    if (this.injectMode === 'jamstack') {
      const data = this.readFileTree(URI.parse(normalizePath(path)))
      if (data instanceof Uint8Array) {
        return uint8ToString(data)
      }
    } else {
      try {
        const res = await fetch('/__fetchfs/read/file/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ path: path }),
        })
        const data = await res.text()
        return data
      } catch (err) {
        console.error(
          `Error while reading file from local FS, make sure fs-over-http is running on port: ${this.fsPort}`,
          err
        )
      }
    }
  }

  async readDirectory(
    path: string,
    extensions?: readonly string[],
    exclude?: readonly string[],
    include?: readonly string[],
    depth?: number
  ): Promise<string[]> {
    try {
      const res = await fetch('/__fetchfs/read/dir/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path: path }),
      })
      const filesPath = await res.text()
      return this.createDirectoryObject(filesPath) as any
    } catch (err) {
      console.error(
        `Error while reading file from local FS, make sure fs-over-http is running on port: ${this.fsPort}`,
        err
      )
    }
  }

  async writeFile(path: string, data: string) {
    if (this.injectMode === 'jamstack') {
      const uri = URI.parse(normalizePath(path))
      const uintData = Buffer.from(data)
      const content = this.writeFileTree(uri, uintData, {
        overwrite: true,
        create: true,
      })

      if (!(content instanceof VSCodeFSTransferableError)) {
        dispatchFrontendFileWriteAction(uri, uintData)
      }
      notifyVSCodeFrontend(path, data)
    } else {
      try {
        await fetch('/__fetchfs/write/file/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ path: path, data: data }),
        })
      } catch (err) {
        console.error(
          `Error while writing file to local FS, make sure fs-over-http is running on port: ${this.fsPort}`,
          err
        )
      }
    }
  }

  async deleteFile(path: string) {
    try {
      await fetch('/__fetchfs/delete/file/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path: path }),
      })
    } catch (err) {
      console.error(
        `Error while deleting file in local FS, make sure fs-over-http is running on port: ${this.fsPort}`,
        err
      )
    }
  }

  async writeFiles(files: FileWriteData[]) {
    files.forEach((f) => this.writeFile(f.path, f.data))
  }

  rename(
    oldUri: URI,
    newUri: URI,
    options: { overwrite: boolean }
  ): VSCodeFSTransferableError | void {
    if (!options.overwrite && this._lookup(newUri, true)) {
      return new VSCodeFSTransferableError(VsCodeFSErrors.FileExists, newUri)
    }

    const entry = this._lookup(oldUri, false)
    const oldParent = this._lookupParentDirectory(oldUri)

    const newParent = this._lookupParentDirectory(newUri)
    const newName = this._resolveFilename(newUri)

    if (oldParent instanceof VSCodeFSTransferableError) {
      return oldParent
    }
    if (newParent instanceof VSCodeFSTransferableError) {
      return newParent
    }

    oldParent.entries.delete(entry.name)
    entry.name = newName
    newParent.entries.set(newName, entry)

    this._renameInTranspiledFiles(oldUri, newUri)
  }

  delete(uri: URI): VSCodeFSTransferableError | void {
    const dirname = URI.parse(this._resolveDirname(uri))
    const basename = this._resolveFilename(uri)
    const parent = this._lookupAsDirectory(dirname, false)
    if (parent instanceof VSCodeFSTransferableError) {
      return parent
    }
    if (!parent.entries.has(basename)) {
      return new VSCodeFSTransferableError(VsCodeFSErrors.FileNotFound, uri)
    }
    parent.entries.delete(basename)
    parent.mtime = Date.now()
    parent.size -= 1

    this._deleteInTranspiledFiles(uri)
  }

  stat(uri: URI): FileStat | VSCodeFSTransferableError {
    return this._lookup(uri, false)
  }

  createDirectory(uri: URI): VSCodeFSTransferableError | void {
    const dirname = URI.parse(this._resolveDirname(uri))
    const basename = this._resolveFilename(uri)
    const parent = this._lookupAsDirectory(dirname, false)
    if (parent instanceof VSCodeFSTransferableError) {
      return parent
    }

    const entry = new Directory(URI.parse(basename))
    parent.entries.set(entry.name, entry)
    parent.mtime = Date.now()
    parent.size += 1
  }

  // Replacement for path.posix.basename
  private _resolveFilename(uri: URI) {
    const pathParts = uri.path.split('/').filter(Boolean)
    const basename = pathParts[pathParts.length - 1]
    return basename
  }

  async deleteFiles(files: FileDeleteData[]) {
    files.forEach((f) => this.deleteFile(f.path))
  }

  setPort(fsPort: number) {
    this.fsPort = fsPort
  }

  // Replacement for path.posix.dirname ??
  private _resolveDirname(uri: URI) {
    const pathParts = uri.path.split('/').filter(Boolean)
    pathParts.pop()

    if (!pathParts.length) {
      return '/'
    }
    return pathParts.join('/')
  }

  private _transformObjectToFsTree(files: IFiles) {
    const root = new Directory(URI.parse(''))

    for (const path in files) {
      const pathParts = path.split('/').filter(Boolean)
      let currentDir = root

      pathParts.forEach((p, i) => {
        if (i === pathParts.length - 1) {
          if (files[path] === null) {
            // It is empty folder
            currentDir.entries.set(p, new Directory(URI.parse(path)))
          } else {
            const fileContent = files[path]
            // console.log(fileContent)
            if (fileContent) {
              const fileUri = URI.parse(path)
              currentDir.entries.set(
                p,
                new File(fileUri, Buffer.from(fileContent))
              )
            }
          }
        }

        if (!currentDir.entries.has(p)) {
          const dir = pathParts.slice(0, i + 1)
          const dirString = dir.join('/')
          currentDir.entries.set(p, new Directory(URI.parse(dirString)))
        }
        currentDir = currentDir.entries.get(p) as Directory
      })
    }
    return root
  }

  setCwd(cwd: string) {
    this.cwd = cwd
  }

  createDirectoryObject(response: string): DirectoryFiles[] {
    let filesOfDirectory: DirectoryFiles[] = []
    response = response
      .replace(/\[/g, '')
      .replace(/\]/g, '')
      .replace(/\\/g, '/')
      .replace(/\"/g, '')
    const arr = response.split(',')
    for (let item in arr) {
      const parsedPath = arr[item].split('/')
      const objToPush: DirectoryFiles[] = [
        { fileName: parsedPath.pop(), filePath: arr[item] },
      ]
      filesOfDirectory = [...filesOfDirectory, ...objToPush]
    }
    return filesOfDirectory
  }

  transformFsTreeToObject(root: Directory) {
    const files: IFiles = {}
    let currRoot: Directory | undefined = root
    const stack: Directory[] = []

    do {
      currRoot.entries.forEach((e) => {
        if (e instanceof File) files[e.uri.path] = uint8ToString(e.data)
        if (e instanceof Directory) stack.push(e)
      })
      currRoot = stack.pop()
    } while (currRoot)

    return files
  }

  readFileTree(uri: URI): Uint8Array | VSCodeFSTransferableError {
    const data = this._lookupAsFile(uri, false)
    if (data instanceof VSCodeFSTransferableError) {
      return data
    }
    return data.data
  }

  readDirectoryTree(
    uri: URI
  ): [string, FileType][] | VSCodeFSTransferableError {
    const entry = this._lookupAsDirectory(uri, false)
    if (entry instanceof VSCodeFSTransferableError) {
      return entry
    }

    const result: [string, FileType][] = []
    for (const [name, child] of entry.entries) {
      result.push([name, child.type])
    }
    return result
  }

  writeFileTree(
    uri: URI,
    content: Uint8Array,
    options: { create: boolean; overwrite: boolean }
  ): Uint8Array | VSCodeFSTransferableError {
    const basename = this._resolveFilename(uri)
    let parent = this._lookupParentDirectory(uri)
    const normalizedContent = transformObjectToUint8Array(content)

    if (
      basename.endsWith('.graphql') &&
      parent instanceof VSCodeFSTransferableError &&
      parent.errorType === VsCodeFSErrors.FileNotADirectory
    ) {
      parent = this._createDirectoryTree(parent.uri)
    }

    if (parent instanceof VSCodeFSTransferableError) {
      return parent
    }
    let entry = parent.entries.get(basename)

    if (entry instanceof Directory) {
      return new VSCodeFSTransferableError(VsCodeFSErrors.FileIsADirectory, uri)
    }

    if (!entry && !options.create) {
      return new VSCodeFSTransferableError(VsCodeFSErrors.FileNotFound, uri)
    }
    if (entry && options.create && !options.overwrite) {
      return new VSCodeFSTransferableError(VsCodeFSErrors.FileExists, uri)
    }

    if (!entry) {
      entry = new File(uri, normalizedContent)
      parent.entries.set(basename, entry)
    }
    entry.mtime = Date.now()
    entry.size = normalizedContent.byteLength
    entry.data = normalizedContent

    return normalizedContent
  }

  private _lookupAsFile(
    uri: URI,
    silent: boolean
  ): File | VSCodeFSTransferableError {
    const entry = this._lookup(uri, silent)
    if (entry instanceof File) {
      return entry
    }
    return new VSCodeFSTransferableError(VsCodeFSErrors.FileIsADirectory, uri)
  }

  private _lookup(uri: URI, silent: false): Entry
  private _lookup(
    uri: URI,
    silent: boolean
  ): Entry | undefined | VSCodeFSTransferableError

  private _lookup(
    uri: URI,
    silent: boolean
  ): Entry | undefined | VSCodeFSTransferableError {
    const parts = uri.path.split('/')
    let entry: Entry = this.root ?? new Directory(URI.parse(''))
    for (const part of parts) {
      if (!part) {
        continue
      }
      let child: Entry | undefined
      if (entry instanceof Directory) {
        child = entry.entries.get(part)
      }
      if (!child) {
        if (!silent) {
          return new VSCodeFSTransferableError(VsCodeFSErrors.FileNotFound, uri)
        } else {
          return undefined
        }
      }
      entry = child
    }

    return entry
  }

  private _lookupParentDirectory(
    uri: URI
  ): Directory | VSCodeFSTransferableError {
    const dirUri = this._resolveDirname(uri)
    const dirname = URI.parse(dirUri)
    return this._lookupAsDirectory(dirname, false)
  }

  private _lookupAsDirectory(
    uri: URI,
    silent: boolean
  ): Directory | VSCodeFSTransferableError {
    const entry = this._lookup(uri, silent)
    if (entry instanceof Directory) {
      return entry
    }
    return new VSCodeFSTransferableError(VsCodeFSErrors.FileNotADirectory, uri)
  }

  private _createDirectoryTree(
    uri: URI
  ): Directory | VSCodeFSTransferableError {
    let parts = uri.path.split('/')
    let entry: Entry = this.root ?? new Directory(URI.parse(''))

    while (parts.length != 0) {
      const actualPart = parts.shift()
      let child: Entry | undefined
      if (entry instanceof Directory) {
        child = entry.entries.get(actualPart)
      }

      if (!child) {
        entry = new Directory(URI.parse(uri.path))
        return entry
      }

      entry = child
    }
  }

  getRoot() {
    return this.root
  }

  setMode(injectMode: 'jamstack' | 'devServer') {
    this.injectMode = injectMode
  }

  setGraphQLEndpoint(graphQLEndpoint: string) {
    this.graphQLEndpoint = graphQLEndpoint
  }

  setIntrospection(introspection: IntrospectionQuery) {
    this.introspection = introspection
  }
}

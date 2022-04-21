import { URI } from 'vscode-uri'

export enum FileType {
  /**
   * The file type is unknown.
   */
  Unknown = 0,
  /**
   * A regular file.
   */
  File = 1,
  /**
   * A directory.
   */
  Directory = 2,
  /**
   * A symbolic link to a file.
   */
  SymbolicLink = 64,
}

export interface FileStat {
  /**
   * The type of the file, e.g. is a regular file, a directory, or symbolic link
   * to a file.
   *
   * *Note:* This value might be a bitmask, e.g. `FileType.File | FileType.SymbolicLink`.
   */
  type: FileType
  /**
   * The creation timestamp in milliseconds elapsed since January 1, 1970 00:00:00 UTC.
   */
  ctime: number
  /**
   * The modification timestamp in milliseconds elapsed since January 1, 1970 00:00:00 UTC.
   *
   * *Note:* If the file changed, it is important to provide an updated `mtime` that advanced
   * from the previous value. Otherwise there may be optimizations in place that will not show
   * the updated file contents in an editor for example.
   */
  mtime: number
  /**
   * The size in bytes.
   *
   * *Note:* If the file changed, it is important to provide an updated `size`. Otherwise there
   * may be optimizations in place that will not show the updated file contents in an editor for
   * example.
   */
  size: number
}

export class File implements FileStat {
  type: FileType
  ctime: number
  mtime: number
  size: number
  uri: URI
  name: string
  data: Uint8Array
  id: number

  constructor(uri: URI, data: Uint8Array) {
    this.type = FileType.File
    this.ctime = Date.now()
    this.mtime = Date.now()
    this.size = 0
    this.data = data
    this.uri = uri

    const pathParts = uri.path.split('/').filter(Boolean)
    this.name = pathParts[pathParts.length - 1]
  }
}

export class Directory implements FileStat {
  type: FileType
  ctime: number
  mtime: number
  size: number
  uri: URI
  name: string
  entries: Map<string, File | Directory>

  constructor(uri: URI) {
    this.type = FileType.Directory
    this.ctime = Date.now()
    this.mtime = Date.now()
    this.size = 0
    this.entries = new Map()
    this.uri = uri

    const pathParts = uri.path.split('/').filter(Boolean)
    this.name = pathParts[pathParts.length - 1]
  }
}

export type Entry = Directory | File

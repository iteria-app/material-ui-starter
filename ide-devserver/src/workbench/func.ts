import { parse } from 'graphql'
import { URI } from 'vscode-uri'
import { frontendActions, workbench } from '..'
import { getJsxIdentifierLength } from '../ast/identifierLength'
import { SourceLineCol } from '@iteria-app/generator'
import { normalizePath } from '../devtools/normalizePath'
import { DocumentNodeLocation } from '../graphql/generateGraphqlTypesFile'
import { IFiles } from '../types'
import { VSCODE_IFRAME_ID } from '../util/constants'

export const transformObjectToUint8Array = (object: any) => {
  const data = Object.keys(object).map((k) => object[k])
  const arr = new Uint8Array(data)
  return arr
}

export const uint8ToString = (content: Uint8Array) => {
  const buffer = Buffer.from(content)
  return buffer.toString()
}

export const notifyVSCodeFrontend = (path: string, data: string) => {
  const vscodeIframe = document.getElementById(
    VSCODE_IFRAME_ID
  ) as HTMLIFrameElement
  if (!vscodeIframe) return
  const { contentWindow } = vscodeIframe
  // Change focus so changes in file will be immediately displayed
  vscodeIframe.focus()
  contentWindow.postMessage(
    {
      command: 'iteria.refreshFile',
      payload: { uri: URI.parse(path), content: Buffer.from(data) },
    },
    '*'
  )
}

export const parseGraphqlDocuments = (files: IFiles) => {
  const paths = Object.keys(files)
  const documents: DocumentNodeLocation[] = paths
    .filter((data) => data.endsWith('.graphql'))
    .map((filePath) => {
      return {
        location: filePath,
        document: parse(files[filePath]),
      }
    })
  return documents
}

export const dispatchFrontendFileWriteAction = (
  uri: URI,
  content: Uint8Array
) => {
  const buffer = Buffer.from(content)
  const stringContent = buffer.toString()

  frontendActions.frontendFileWrite(uri.path, stringContent)
}

export const navigateToSourceCodeVscode = async (source: SourceLineCol) => {
  const filePath = normalizePath(source.fileName)
  const file = await workbench.readFile(filePath)
  if (!file) return console.error('File not found in Workbench')

  const vscodeIframe = document.getElementById(
    VSCODE_IFRAME_ID
  ) as HTMLIFrameElement

  if (!vscodeIframe) return console.error('No VSCode Iframe found')

  // TODO Move to lowcode
  const identifierLength = getJsxIdentifierLength(file, source) + 1
  // Change focus so changes in file will be immediately displayed
  vscodeIframe?.focus()
  vscodeIframe?.contentWindow?.postMessage(
    {
      command: 'iteria.navigateEditor',
      payload: {
        uri: URI.parse(filePath),
        lineNumber: source.lineNumber - 1,
        columnNumber: source.columnNumber - 1,
        identifierLength,
      },
    },
    '*'
  )
}

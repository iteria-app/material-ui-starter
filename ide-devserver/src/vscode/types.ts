// TODO Import types from vscode, avoid any type

import { URI } from 'vscode-uri'

export interface IFileSearchPayload {
  query: FileSearchQuery
  _options: any
  _token: any
}

interface FileSearchQuery {
  /**
   * The search pattern to match against file paths.
   */
  pattern: string
}

export interface ICommandPayload extends IFileSearchPayload {
  uri: URI
  newUri: URI
  oldUri: URI
  source?: URI
  destination?: URI
  content: Uint8Array
  options?: any
}

export interface ICommandArgs {
  command: string
  id: string
  payload: ICommandPayload
}

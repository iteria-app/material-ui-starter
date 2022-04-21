import { URI } from 'vscode-uri'

export enum VsCodeFSErrors {
  FileNotFound = 'FileNotFound',
  FileIsADirectory = 'FileIsADirectory',
  FileExists = 'FileExists',
  FileNotADirectory = 'FileNotADirectory',
}

export class VSCodeFSTransferableError {
  constructor(errorType: VsCodeFSErrors, uri: URI) {
    this.errorType = errorType
    this.uri = uri
  }

  errorType: VsCodeFSErrors
  uri: URI
}

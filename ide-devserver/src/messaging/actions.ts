import { FileDeleteData, FileWriteData } from '../workbench/Workbench'
import {
  BundleFilesData,
  TranspileFilesData,
  TranspileSingleFileData,
  UpdateTranspiledFilesData,
} from '../bundler'
import {
  PerformReactRefreshData,
  RefreshIframeData,
} from '../react-instrumentation'
import { ErrorData, IFiles } from '../types'
import {
  FileWriteData,
  GetProjectZipData,
  ProjectLoadedData,
} from '../workbench/Workbench'
import {
  FILE_WRITE,
  MULTIPLE_FILE_WRITE,
  ElementHighlightMessageType,
  FRONTEND_FILE_WRITE,
  GENERATE_GRAPHQL,
  SAVE_ZIP,
  MULTIPLE_FILE_DELETE,
  GET_PROJECT_FROM_ARCHIVE,
  TRANSPILER_ERROR,
  TRANSPILE_SINGLE_FILE,
  UPDATE_TRANSPILED_FILES,
  BUNDLE_FILES,
  PERFORM_REACT_REFRESH,
  REFRESH_IFRAME,
  PROJECT_LOADED,
  CONNECT_ELEMENT_HIGHLIGHT,
  TRANSPILE_FILES,
} from './messageTypes'
import IMessaging from './messaging'

export class FrontendActions {
  constructor(messagingService: IMessaging) {
    this.messagingService = messagingService
  }

  private messagingService: IMessaging

  saveZip() {
    this.messagingService.postMessage(SAVE_ZIP, {})
  }

  fileWrite(path: string, data: string) {
    this.messagingService.postMessage<FileWriteData>(FILE_WRITE, { path, data })
  }

  multipleFileWrite(files: FileWriteData[]) {
    this.messagingService.postMessage<FileWriteData[]>(
      MULTIPLE_FILE_WRITE,
      files
    )
  }
  multipleFileDelete(files: FileDeleteData[]) {
    this.messagingService.postMessage<FileDeleteData[]>(
      MULTIPLE_FILE_DELETE,
      files
    )
  }
  frontendFileWrite(path: string, data: string) {
    this.messagingService.postMessage<FileWriteData>(FRONTEND_FILE_WRITE, {
      path,
      data,
    })
  }

  elementHighlightClick<SourceLineCol>(
    type: ElementHighlightMessageType,
    source: SourceLineCol
  ) {
    this.messagingService.postMessage(type, source)
  }

  generateGraphql() {
    this.messagingService.postMessage(GENERATE_GRAPHQL, {})
  }

  getProjectFromArchive(url: string) {
    this.messagingService.postMessage<GetProjectZipData>(
      GET_PROJECT_FROM_ARCHIVE,
      {
        url,
      }
    )
  }

  transpileError(err: Error) {
    this.messagingService.postMessage<ErrorData>(TRANSPILER_ERROR, { err })
  }

  transpileSingleFile(path: string, data: string, files: IFiles) {
    this.messagingService.postMessage<TranspileSingleFileData>(
      TRANSPILE_SINGLE_FILE,
      {
        files,
        path,
        data,
      }
    )
  }

  updateTranspiledFiles(transpiledFiles: IFiles) {
    this.messagingService.postMessage<UpdateTranspiledFilesData>(
      UPDATE_TRANSPILED_FILES,
      transpiledFiles
    )
  }

  bundleFiles(files: IFiles, bundleEntry?: string) {
    this.messagingService.postMessage<BundleFilesData>(BUNDLE_FILES, {
      files,
      bundleEntry,
    })
  }

  perfromReactRefresh(bundle: string) {
    this.messagingService.postMessage<PerformReactRefreshData>(
      PERFORM_REACT_REFRESH,
      { bundle }
    )
  }

  refreshIframe(bundle: string) {
    this.messagingService.postMessage<RefreshIframeData>(REFRESH_IFRAME, {
      bundle,
    })
  }

  projectLoaded(files: IFiles) {
    this.messagingService.postMessage<ProjectLoadedData>(PROJECT_LOADED, {
      files,
    })
  }

  connectElementHighlight() {
    this.messagingService.postMessage(CONNECT_ELEMENT_HIGHLIGHT, {})
  }

  transpileFiles(files: IFiles) {
    this.messagingService.postMessage<TranspileFilesData>(
      TRANSPILE_FILES,
      files
    )
  }
}

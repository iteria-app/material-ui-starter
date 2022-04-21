import { bundleFiles } from '../../../bundler-main/src/bundle'
import {
  transpileFiles,
  transpileSingleFile,
} from '../../../bundler-main/src/transpile'

import { IFiles } from '../types'
import {
  BUNDLER_ERROR,
  BUNDLE_FILES,
  TRANSPILER_ERROR,
  TRANSPILE_FILES,
  TRANSPILE_SINGLE_FILE,
} from '../messaging/messageTypes'
import { stripExtension } from '../util/strip'
import IMessaging from '../messaging/messaging'
import { frontendActions } from '..'

export type BundleFilesData = { files: IFiles; bundleEntry?: string }
export type UpdateTranspiledFilesData = IFiles
export type TranspileFilesData = IFiles
export interface TranspileSingleFileData {
  path: string
  data: string
  files: IFiles
}

export interface BundlerError {
  error: Error
}

export interface IBundler {
  bundleFiles: (
    files: IFiles,
    bundleEntry?: string
  ) => Promise<string | BundlerError>
  transpileFiles: (files: IFiles) => Promise<IFiles | BundlerError>
  transpileSingleFile: (
    path: string,
    data: string
  ) => Promise<string | BundlerError>
}

export class BundleWorker {
  constructor(messagingService: IMessaging) {
    this.messagingService = messagingService

    messagingService.addEventListener<BundleFilesData>(
      BUNDLE_FILES,
      async ({ files, bundleEntry }) => {
        const bundle = await this.bundleFiles(files, '/src/main')
        if (bundle) frontendActions.perfromReactRefresh(bundle)
      }
    )

    messagingService.addEventListener<TranspileFilesData>(
      TRANSPILE_FILES,
      async (files) => {
        const transpiledFiles = await this.transpileFiles(files)
        if (transpiledFiles) {
          frontendActions.bundleFiles(transpiledFiles, '/src/main')
          frontendActions.updateTranspiledFiles(transpiledFiles)
        }
      }
    )

    messagingService.addEventListener<TranspileSingleFileData>(
      TRANSPILE_SINGLE_FILE,
      async ({ files, path, data }) => {
        const transpiledFile = await this.transpileSingleFile(path, data)
        if (transpiledFile) {
          const newPath = path.endsWith('.json') ? path : stripExtension(path)
          const newFiles = { ...files, [newPath]: transpiledFile }
          frontendActions.bundleFiles(newFiles)
          frontendActions.updateTranspiledFiles(newFiles)
        }
      }
    )
  }

  private messagingService: IMessaging

  async bundleFiles(files: IFiles, bundleEntry?: string) {
    console.time('bundle')
    const data = await bundleFiles(files, bundleEntry)
    if (typeof data !== 'string') {
      this.messagingService.postMessage(BUNDLER_ERROR, data)
      return null
    }
    console.timeEnd('bundle')
    return data
  }

  async transpileFiles(files: IFiles) {
    const data = await transpileFiles(files)
    if ('error' in data) {
      this.messagingService.postMessage(TRANSPILER_ERROR, data)
      return null
    }
    return data
  }

  async transpileSingleFile(path: string, data: string) {
    console.time('transpile')
    const transpiled = await transpileSingleFile(path, data)

    if (typeof transpiled !== 'string') {
      this.messagingService.postMessage(TRANSPILER_ERROR, transpiled)
      return null
    }

    console.timeEnd('transpile')
    return transpiled
  }
}

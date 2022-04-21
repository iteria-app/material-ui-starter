import { ICommandArgs } from '../types'
import { DevWorkbench } from '../../workbench/Workbench'
import { vscodeFileSystemListener } from './fileSystemListener'
import { vscodeFileSearchListener } from './fileSearchListener'

export const listenToVsCodeEvent = (
  payload: ICommandArgs,
  fileTree: DevWorkbench,
  window: Window
) => {
  vscodeFileSystemListener(payload, fileTree, window)
  vscodeFileSearchListener(payload, fileTree, window)
}

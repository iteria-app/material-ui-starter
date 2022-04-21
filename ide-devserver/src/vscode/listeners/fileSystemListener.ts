import { ICommandArgs } from '../types'
import { DevWorkbench } from '../../workbench/Workbench'
import { dispatchFrontendFileWriteAction } from '../../workbench/func'
import { VSCodeFSTransferableError } from '../errors'

export const vscodeFileSystemListener = (
  args: ICommandArgs,
  fileTree: DevWorkbench,
  contentWindow: Window
) => {
  const {
    payload: { uri },
    command,
    id,
  } = args
  switch (command) {
    case 'readFile': {
      const data = fileTree.readFileTree(uri)
      contentWindow?.postMessage({ id, command, payload: data }, '*')
      break
    }
    case 'readDir': {
      const data = fileTree.readDirectoryTree(uri)
      contentWindow?.postMessage({ id, command, payload: data }, '*')
      break
    }
    case 'writeFile': {
      const { content, options } = args.payload
      const data = fileTree.writeFileTree(uri, content, options)
      if (!(data instanceof VSCodeFSTransferableError)) {
        dispatchFrontendFileWriteAction(uri, data)
      }
      contentWindow?.postMessage({ id, command, payload: data }, '*')
      break
    }
    case 'rename': {
      const { oldUri, newUri, options } = args.payload
      const data = fileTree.rename(oldUri, newUri, options)

      contentWindow?.postMessage({ id, command, payload: data }, '*')
      break
    }
    case 'stat': {
      const data = fileTree.stat(uri)
      contentWindow?.postMessage({ id, command, payload: data }, '*')
      break
    }
    case 'delete': {
      const data = fileTree.delete(uri)
      contentWindow?.postMessage({ id, command, payload: data }, '*')
      break
    }
    case 'createDir': {
      const data = fileTree.createDirectory(uri)
      contentWindow?.postMessage({ id, command, payload: data }, '*')
      break
    }
  }
}

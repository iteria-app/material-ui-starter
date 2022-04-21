import { URI } from 'vscode-uri'
import { ICommandArgs } from '../types'
import { DevWorkbench } from '../../workbench/Workbench'
import { Directory, File } from '../vfs'

const fileSearchInFileTree = (root: Directory, query: string) => {
  const stack: Directory[] = []
  const uris: URI[] = []

  stack.push(root)

  while (stack.length > 0) {
    const dir = stack.pop()

    dir?.entries.forEach((e) => {
      if (e instanceof Directory) {
        stack.push(e)
      } else if (e instanceof File) {
        const match = e.name.match(new RegExp(query, 'i'))
        if (match) {
          uris.push(e.uri)
        }
      }
    })
  }
  return uris
}

export const vscodeFileSearchListener = (
  args: ICommandArgs,
  fileTree: DevWorkbench,
  contentWindow: Window
) => {
  const { payload, command, id } = args

  if (command === 'fileSearch') {
    const { query } = payload
    const root = fileTree.getRoot()
    if (!root) {
      throw new Error('Files not in Workbench')
    }

    const data = fileSearchInFileTree(root, query.pattern)

    contentWindow?.postMessage({ id, command, payload: data }, '*')
  }
}

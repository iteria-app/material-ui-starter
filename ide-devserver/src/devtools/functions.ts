import { DevtoolsTreeNode } from '../types'

export const getParentId = (
  id: number,
  devtoolsTree: Map<number, DevtoolsTreeNode>
) => {
  const currNode = devtoolsTree?.get(id)
  return currNode?.parentID
}

export const getChildId = (
  id: number,
  devtoolsTree: Map<number, DevtoolsTreeNode>
) => {
  const currNode = devtoolsTree?.get(id)
  return currNode?.children[0]
}

export const getDevtoolsTree = (): Map<number, DevtoolsTreeNode> =>
  //@ts-ignore
  window.devtoolsTree

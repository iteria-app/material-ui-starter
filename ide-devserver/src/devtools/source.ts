import { SourceLineCol } from '@iteria-app/generator'
import { getChildId, getDevtoolsTree, getParentId } from './functions'
import { isColumnTitle } from './table'

let requestId = 0

export const getSourceFromElement = (el: HTMLElement) => {
  const data = getDataFromElement(el)
  return data?.source as SourceLineCol | null
}

export const getDataFromElement = (el: HTMLElement) => {
  const devtoolsHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__
  const id = devtoolsHook?.reactDevtoolsAgent?.getIDForNode(el)

  if (!id) return null

  // FIXME This has to be non-hardcoded
  const rendererInterfaces = (devtoolsHook?.reactDevtoolsAgent as any)
    ._rendererInterfaces

  if (!rendererInterfaces) return

  let data = undefined

  for (const rendererInterface of Object.values(rendererInterfaces)) {
    if (isColumnTitle(el)) {
      data = getDataFromChild(id, rendererInterface)
    }

    if (!data) data = getDataFromParent(id, rendererInterface)
  }

  return data
}

const getDataFromParent = (id: number, rendererInterface: any) => {
  const devtoolsTree = getDevtoolsTree()
  let currId = id
  for (let i = 0; i < 10; i++) {
    const path = rendererInterface.getPathForElement(currId)
    const data = rendererInterface.inspectElement(
      `iteria-response${requestId++}`,
      currId,
      path
    )
    if (data.value?.source) return data.value as any
    currId = getParentId(currId, devtoolsTree)
  }
  console.warn('element source not found')
}

export const findReactIntlProviderId = () => {
  const devtoolsTree = getDevtoolsTree()
  if (!devtoolsTree) return null
  let currId = 1

  for (let i = 0; i < 10; i++) {
    if (devtoolsTree.get(currId)?.displayName === 'IntlProvider') return currId
    currId = getChildId(currId, devtoolsTree)
  }
  return null
}

export const findTypenameValue = () => {
  const devtoolsHook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__
  const devtoolsTree = getDevtoolsTree()

  const rendererInterfaces = (devtoolsHook?.reactDevtoolsAgent as any)
    ?._rendererInterfaces

  if (!rendererInterfaces) return

  for (const rendererInferface of Object.values(rendererInterfaces) as any) {
    for (const [, element] of devtoolsTree) {
      const path = rendererInferface.getPathForElement(element.id)
      const data = rendererInferface.inspectElement(
        `iteria-response${requestId++}`,
        element.id,
        path
      )

      const elementProps = data?.value?.source
        ? data?.value?.props?.data
        : undefined
      if (elementProps) {
        const __typename = findPropInPropTree(elementProps, '__typename')
        if (__typename) return __typename
      }
    }
  }
}

const findPropInPropTree = (props: Object, propName: string) => {
  if (!props) return
  for (const prop of Object.keys(props)) {
    if (prop === propName) return props[prop]
    else if (typeof props[prop] === 'object') {
      const foundProp = findPropInPropTree(props[prop], propName)
      if (foundProp) return foundProp
    }
  }
}

export const getPageLangLocale = (): string | undefined => {
  const providerId = findReactIntlProviderId()
  const rendererInterface =
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.reactDevtoolsAgent
      ._rendererInterfaces['1']
  const path = rendererInterface.getPathForElement(providerId)
  const data = rendererInterface.inspectElement(
    `iteria-response${requestId++}`,
    providerId,
    path
  )

  return data.value?.key
}

// TODO Get data from child with devtoolsTree
const getDataFromChild = (id: number, rendererInterface: any) => {
  for (let i = id; i < id + 100; i++) {
    const path = rendererInterface.getPathForElement(i)

    const data = rendererInterface.inspectElement(
      `iteria-response${requestId++}`,
      i,
      path
    )

    if (data.value?.source) return data.value as any
  }
  // throw new Error("Element source not found")
}

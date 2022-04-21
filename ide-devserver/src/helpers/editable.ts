import { getEntityNameFromUrl } from '@iteria-app/component-templates/src/gql/entity/getEntityNameFromUrl'
import { getSourceFromElement } from '../devtools/source'
import { ElementHighlightMessageType } from '../messaging/messageTypes'

export const setEndOfContenteditable = (
  editingElement: Element,
  el: any,
  pos?: number | undefined
) => {
  const selection = window.getSelection()
  const range = document.createRange()
  selection.removeAllRanges()
  if (pos) {
    range.setStart(editingElement.childNodes[0], pos)
  } else {
    range.selectNodeContents(el)
    range.collapse(false)
  }
  selection.addRange(range)
}

export const handleReorderElements = async (
  window: Window,
  payload: {
    elements: [
      {
        prevIndex: number
        newIndex: number
        element: HTMLElement
        fieldName: string
      }
    ]
    hasFields: boolean
    hasRoutes: boolean
  },
  type: ElementHighlightMessageType,
  frontendActions
) => {
  if (!window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
    throw new Error(
      '__REACT_DEVTOOLS_GLOBAL_HOOK__ not available on window object'
    )

  let data: any = {
    fileName: undefined,
    elementsPosEnd: {},
    chained_changes: {},
    hasFields: payload.hasFields,
    hasRoutes: payload.hasRoutes,
    entityName: getEntityNameFromUrl(),
  }
  if (payload.hasFields || payload.hasRoutes) {
    let allNames = Array(payload.elements.length + 1)
    payload.elements.forEach((element) => {
      allNames[element.prevIndex] = element.fieldName
    })
    payload.elements.forEach(
      (item) =>
        (data.chained_changes[allNames[item.prevIndex]] =
          allNames[item.newIndex])
    )
  } else {
    payload.elements.forEach(
      (item) => (data.chained_changes[item.prevIndex] = item.newIndex)
    )
  }
  if (!payload.hasFields && !payload.hasRoutes) {
    payload.elements.forEach((item) => {
      const source: any = getSourceFromElement(item.element)
      if (!source) {
        window.postMessage({
          type: 'SHOW_USER_FEEDBACK',
          payload: { type: `${type}_ERROR` },
        })
        console.error('Source not found', item.element)
      }
      data.elementsPosEnd[item.prevIndex] = source
      data.fileName = source.fileName
    })
  }
  frontendActions.elementHighlightClick(type, data)
}

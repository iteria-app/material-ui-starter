import { getSourceFromElement } from './source'

export const isColumnTitle = (el: HTMLElement) =>
  el.classList.contains('MuiDataGrid-columnHeaderTitleContainer')

export const getSourceOfTable = (el: HTMLElement, contentWindow: Window) => {
  let currElement = el

  while (currElement.parentElement) {
    if (currElement.classList.contains('MuiDataGrid-root')) {
      return getSourceFromElement(currElement)
    }
    currElement = currElement.parentElement
  }
}

export const checkIfInsideDataGrid = (el: HTMLElement) =>
  el.classList.contains('MuiDataGrid-cell')

export const getColIndex = (el: HTMLElement) => {
  let currElement = el

  while (currElement.parentElement) {
    if (currElement.classList.contains('MuiDataGrid-columnHeader')) {
      const attr = currElement.getAttribute('aria-colindex')
      if (attr) {
        return parseInt(attr)
      }
    }
    currElement = currElement.parentElement
  }
}

export const getFieldNameFromElement = (el: HTMLElement) => {
  let currElement = el

  while (currElement.parentElement) {
    if (currElement.classList.contains('MuiDataGrid-columnHeader')) {
      const attr = currElement.getAttribute('data-field')
      if (attr) return attr
    }
    currElement = currElement.parentElement
  }
}

export const getFormInputIndex = (el: HTMLElement) => {
  let currElement = el
  let previousElement = el
  if (el.parentElement) {
    while (currElement.parentElement) {
      if (currElement.parentElement.classList.contains('MuiGrid-container')) {
        const parent = currElement.parentElement
        const arrHtmlCollection = [...parent.children]
        return arrHtmlCollection.indexOf(previousElement) + 1
      }
      currElement = currElement.parentElement
      previousElement = currElement
    }
  }
}

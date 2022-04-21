const classNameBlacklist = [
  // 'MuiDataGrid-cell',
  // 'MuiDataGrid-columnSeparator',
  // 'MuiDataGrid-menuIconButton',
  // 'MuiDataGrid-iconButtonContainer',
  // 'MuiGridPanel-root',
]

// Classname of root element of table to find out if
// we are hovering actually in table
const tableRootClassNames = ['MuiDataGrid-main']

const gridClassNames = ['MuiGrid-root', 'MuiGrid-item']

export const shouldDisplayElementHighlight = (el: HTMLElement) =>
  !classNameBlacklist.some((className) => el.closest(`.${className}`))

export const isInsideTable = (el: HTMLElement) =>
  tableRootClassNames.some((className) => el.closest(`.${className}`))

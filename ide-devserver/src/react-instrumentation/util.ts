export function utfDecodeString(array: Array<number>): string {
  return String.fromCodePoint(...array)
}

export const TREE_OPERATION_ADD = 1
export const TREE_OPERATION_REMOVE = 2
export const TREE_OPERATION_REORDER_CHILDREN = 3
export const TREE_OPERATION_UPDATE_TREE_BASE_DURATION = 4
export const TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS = 5
export const TREE_OPERATION_REMOVE_ROOT = 6

export const ElementTypeClass = 1
export const ElementTypeContext = 2
export const ElementTypeFunction = 5
export const ElementTypeForwardRef = 6
export const ElementTypeHostComponent = 7
export const ElementTypeMemo = 8
export const ElementTypeOtherOrUnknown = 9
export const ElementTypeProfiler = 10
export const ElementTypeRoot = 11
export const ElementTypeSuspense = 12
export const ElementTypeSuspenseList = 13

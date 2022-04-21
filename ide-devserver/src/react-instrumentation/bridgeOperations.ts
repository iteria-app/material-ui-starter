import {
  utfDecodeString,
  TREE_OPERATION_ADD,
  TREE_OPERATION_REMOVE,
  TREE_OPERATION_REMOVE_ROOT,
  TREE_OPERATION_REORDER_CHILDREN,
  TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS,
  TREE_OPERATION_UPDATE_TREE_BASE_DURATION,
  ElementTypeRoot,
  ElementTypeClass,
  ElementTypeForwardRef,
  ElementTypeFunction,
  ElementTypeMemo,
} from './util'

const separateDisplayNameAndHOCs = (
  displayName: string | null | undefined,
  type: number
) => {
  if (displayName === null) {
    return [null, null]
  }

  let hocDisplayNames = null

  switch (type) {
    case ElementTypeClass:
    case ElementTypeForwardRef:
    case ElementTypeFunction:
    case ElementTypeMemo:
      if (displayName!.indexOf('(') >= 0) {
        const matches = displayName!.match(/[^()]+/g)
        if (matches != null) {
          displayName = matches.pop()
          hocDisplayNames = matches
        }
      }
      break
    default:
      break
  }

  if (type === ElementTypeMemo) {
    if (hocDisplayNames === null) {
      hocDisplayNames = ['Memo']
    } else {
      hocDisplayNames.unshift('Memo')
    }
  } else if (type === ElementTypeForwardRef) {
    if (hocDisplayNames === null) {
      hocDisplayNames = ['ForwardRef']
    } else {
      hocDisplayNames.unshift('ForwardRef')
    }
  }

  return [displayName, hocDisplayNames]
}

export class Store {
  // Computed whenever _errorsAndWarnings Map changes.
  _cachedErrorCount = 0
  _cachedWarningCount = 0
  _cachedErrorAndWarningTuples: any = []

  // Should new nodes be collapsed by default when added to the tree?
  _collapseNodesByDefault = true

  // Map of ID to number of recorded error and warning message IDs.
  _errorsAndWarnings: any = new Map()

  // At least one of the injected renderers contains (DEV only) owner metadata.
  _hasOwnerMetadata = false

  // Map of ID to (mutable) Element.
  // Elements are mutated to avoid excessive cloning during tree updates.
  // The InspectedElement Suspense cache also relies on this mutability for its WeakMap usage.
  _idToElement = new Map()

  // Map of element (id) to the set of elements (ids) it owns.
  // This map enables getOwnersListForElement() to avoid traversing the entire tree.
  _ownersMap = new Map()

  // Incremented each time the store is mutated.
  // This enables a passive effect to detect a mutation between render and commit phase.
  _revision = 0

  // This Array must be treated as immutable!
  // Passive effects will check it for changes between render and mount.
  _roots = []

  _rootIDToCapabilities = new Map()

  // Renderer ID is needed to support inspection fiber props, state, and hooks.
  _rootIDToRendererID = new Map()

  // These options may be initially set by a confiugraiton option when constructing the Store.
  // In the case of "supportsProfiling", the option may be updated based on the injected renderers.
  _supportsProfiling = false

  // Total number of visible elements (within all roots).
  // Used for windowing purposes.
  _weightAcrossRoots = 0

  getElementByID(id: number) {
    const element = this._idToElement.get(id)
    if (element == null) {
      console.warn(`No element found with id "${id}"`)
      return null
    }

    return element
  }

  getIndexOfElementID(id: number) {
    const element = this.getElementByID(id)

    if (element === null || element.parentID === 0) {
      return null
    }

    // Walk up the tree to the root.
    // Increment the index by one for each node we encounter,
    // and by the weight of all nodes to the left of the current one.
    // This should be a relatively fast way of determining the index of a node within the tree.
    let previousID = id
    let currentID = element.parentID
    let index = 0
    while (true) {
      const current = this._idToElement.get(currentID)

      const { children } = current
      for (let i = 0; i < children.length; i++) {
        const childID = children[i]
        if (childID === previousID) {
          break
        }
        const child = this._idToElement.get(childID)
        index += child.isCollapsed ? 1 : child.weight
      }

      if (current.parentID === 0) {
        // We found the root; stop crawling.
        break
      }

      index++

      previousID = current.id
      currentID = current.parentID
    }

    // At this point, the current ID is a root (from the previous loop).
    // We also need to offset the index by previous root weights.
    for (let i = 0; i < this._roots.length; i++) {
      const rootID = this._roots[i]
      if (rootID === currentID) {
        break
      }
      const root = this._idToElement.get(rootID)
      index += root.weight
    }

    return index
  }

  _adjustParentTreeWeight = (parentElement: any, weightDelta: number) => {
    let isInsideCollapsedSubTree = false

    while (parentElement != null) {
      parentElement.weight += weightDelta

      // Additions and deletions within a collapsed subtree should not bubble beyond the collapsed parent.
      // Their weight will bubble up when the parent is expanded.
      if (parentElement.isCollapsed) {
        isInsideCollapsedSubTree = true
        break
      }

      parentElement = this._idToElement.get(parentElement.parentID)
    }

    // Additions and deletions within a collapsed subtree should not affect the overall number of elements.
    if (!isInsideCollapsedSubTree) {
      this._weightAcrossRoots += weightDelta
    }
  }

  onBridgeOperations = (operations: number[]) => {
    let haveRootsChanged = false
    let haveErrorsOrWarningsChanged = false

    // The first two values are always rendererID and rootID
    const rendererID = operations[0]

    const addedElementIDs = []
    // This is a mapping of removed ID -> parent ID:
    const removedElementIDs = new Map()
    // We'll use the parent ID to adjust selection if it gets deleted.

    let i = 2

    // Reassemble the string table.
    const stringTable: (string | null)[] = [
      null, // ID = 0 corresponds to the null string.
    ]
    const stringTableSize = operations[i++]
    const stringTableEnd = i + stringTableSize
    while (i < stringTableEnd) {
      const nextLength = operations[i++]
      const nextString = utfDecodeString(operations.slice(i, i + nextLength))
      stringTable.push(nextString)
      i += nextLength
    }

    while (i < operations.length) {
      const operation = operations[i]
      switch (operation) {
        case TREE_OPERATION_ADD: {
          const id = operations[i + 1]
          const type = operations[i + 2]

          i += 3

          if (this._idToElement.has(id)) {
            console.error(
              `Cannot add node "${id}" because a node with that id is already in the Store.`
            )
          }

          let ownerID = 0
          let parentID = null
          if (type === ElementTypeRoot) {
            const supportsProfiling = operations[i] > 0
            i++

            const hasOwnerMetadata = operations[i] > 0
            i++

            this._roots = this._roots.concat(id as any)
            this._rootIDToRendererID.set(id, rendererID)
            this._rootIDToCapabilities.set(id, {
              hasOwnerMetadata,
              supportsProfiling,
            })

            this._idToElement.set(id, {
              children: [],
              depth: -1,
              displayName: null,
              hocDisplayNames: null,
              id,
              isCollapsed: false, // Never collapse roots; it would hide the entire tree.
              key: null,
              ownerID: 0,
              parentID: 0,
              type,
              weight: 0,
            })

            haveRootsChanged = true
          } else {
            parentID = operations[i]
            i++

            ownerID = operations[i]
            i++

            const displayNameStringID = operations[i]
            const displayName = stringTable[displayNameStringID]
            i++

            const keyStringID = operations[i]
            const key = stringTable[keyStringID]
            i++

            if (!this._idToElement.has(parentID)) {
              console.error(
                `Cannot add child "${id}" to parent "${parentID}" because parent node was not found in the Store.`
              )
            }

            const parentElement = this._idToElement.get(parentID)
            parentElement.children.push(id)

            const [displayNameWithoutHOCs, hocDisplayNames] =
              separateDisplayNameAndHOCs(displayName, type)

            const element = {
              children: [],
              depth: parentElement.depth + 1,
              displayName: displayNameWithoutHOCs,
              hocDisplayNames,
              id,
              isCollapsed: this._collapseNodesByDefault,
              key,
              ownerID,
              parentID: parentElement.id,
              type,
              weight: 1,
            }

            this._idToElement.set(id, element)
            addedElementIDs.push(id)
            this._adjustParentTreeWeight(parentElement, 1)

            if (ownerID > 0) {
              let set = this._ownersMap.get(ownerID)
              if (set === undefined) {
                set = new Set()
                this._ownersMap.set(ownerID, set)
              }
              set.add(id)
            }
          }
          break
        }
        case TREE_OPERATION_REMOVE: {
          const removeLength = operations[i + 1]
          i += 2

          for (let removeIndex = 0; removeIndex < removeLength; removeIndex++) {
            const id = operations[i]

            if (!this._idToElement.has(id)) {
              console.error(
                `Cannot remove node "${id}" because no matching node was found in the Store.`
              )
            }

            i += 1

            const element = this._idToElement.get(id)
            const { children, ownerID, parentID, weight } = element
            if (children.length > 0) {
              console.error(`Node "${id}" was removed before its children.`)
            }

            this._idToElement.delete(id)

            let parentElement = null
            if (parentID === 0) {
              this._roots = this._roots.filter((rootID) => rootID !== id)
              this._rootIDToRendererID.delete(id)
              this._rootIDToCapabilities.delete(id)

              haveRootsChanged = true
            } else {
              parentElement = this._idToElement.get(parentID)
              if (parentElement === undefined) {
                console.error(
                  `Cannot remove node "${id}" from parent "${parentID}" because no matching node was found in the Store.`
                )
              }
              const index = parentElement.children.indexOf(id)
              parentElement.children.splice(index, 1)
            }

            this._adjustParentTreeWeight(parentElement, -weight)
            removedElementIDs.set(id, parentID)

            this._ownersMap.delete(id)
            if (ownerID > 0) {
              const set = this._ownersMap.get(ownerID)
              if (set !== undefined) {
                set.delete(id)
              }
            }

            if (this._errorsAndWarnings.has(id)) {
              this._errorsAndWarnings.delete(id)
              haveErrorsOrWarningsChanged = true
            }
          }
          break
        }
        case TREE_OPERATION_REMOVE_ROOT: {
          i += 1

          const id = operations[1]

          const recursivelyDeleteElements = (elementID: number) => {
            const element = this._idToElement.get(elementID)
            this._idToElement.delete(elementID)
            if (element) {
              // Mostly for Flow's sake
              for (let index = 0; index < element.children.length; index++) {
                recursivelyDeleteElements(element.children[index])
              }
            }
          }

          const root = this._idToElement.get(id)
          recursivelyDeleteElements(id)

          this._rootIDToCapabilities.delete(id)
          this._rootIDToRendererID.delete(id)
          this._roots = this._roots.filter((rootID) => rootID !== id)
          this._weightAcrossRoots -= root.weight
          break
        }
        case TREE_OPERATION_REORDER_CHILDREN: {
          const id = operations[i + 1]
          const numChildren = operations[i + 2]
          i += 3

          if (!this._idToElement.has(id)) {
            console.error(
              `Cannot reorder children for node "${id}" because no matching node was found in the Store.`
            )
          }

          const element = this._idToElement.get(id)
          const children = element.children
          if (children.length !== numChildren) {
            console.error(
              `Children cannot be added or removed during a reorder operation.`
            )
          }

          for (let j = 0; j < numChildren; j++) {
            const childID = operations[i + j]
            children[j] = childID
            // if (__DEV__) {
            //   // This check is more expensive so it's gated by __DEV__.
            //   const childElement = this._idToElement.get(childID)
            //   if (childElement == null || childElement.parentID !== id) {
            //     console.error(
            //       `Children cannot be added or removed during a reorder operation.`
            //     )
            //   }
            // }
          }
          i += numChildren

          break
        }
        case TREE_OPERATION_UPDATE_TREE_BASE_DURATION:
          // Base duration updates are only sent while profiling is in progress.
          // We can ignore them at this point.
          // The profiler UI uses them lazily in order to generate the tree.
          i += 3
          break
        case TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS:
          const id = operations[i + 1]
          const errorCount = operations[i + 2]
          const warningCount = operations[i + 3]

          i += 4

          if (errorCount > 0 || warningCount > 0) {
            this._errorsAndWarnings.set(id, { errorCount, warningCount })
          } else if (this._errorsAndWarnings.has(id)) {
            this._errorsAndWarnings.delete(id)
          }
          haveErrorsOrWarningsChanged = true
          break
        default:
          console.error(`Unsupported Bridge operation "${operation}"`)
      }
    }

    this._revision++

    if (haveErrorsOrWarningsChanged) {
      let errorCount = 0
      let warningCount = 0

      this._errorsAndWarnings.forEach((entry: any) => {
        errorCount += entry.errorCount
        warningCount += entry.warningCount
      })

      this._cachedErrorCount = errorCount
      this._cachedWarningCount = warningCount

      const errorAndWarningTuples: any = []

      this._errorsAndWarnings.forEach((_: any, id: number) => {
        const index = this.getIndexOfElementID(id)
        if (index !== null) {
          let low = 0
          let high = errorAndWarningTuples.length
          while (low < high) {
            const mid = (low + high) >> 1
            if (errorAndWarningTuples[mid].index > index) {
              high = mid
            } else {
              low = mid + 1
            }
          }

          errorAndWarningTuples.splice(low, 0, { id, index })
        }
      })

      this._cachedErrorAndWarningTuples = errorAndWarningTuples
    }

    if (haveRootsChanged) {
      this._hasOwnerMetadata = false
      this._supportsProfiling = false
      this._rootIDToCapabilities.forEach(
        ({ hasOwnerMetadata, supportsProfiling }) => {
          if (hasOwnerMetadata) {
            this._hasOwnerMetadata = true
          }
          if (supportsProfiling) {
            this._supportsProfiling = true
          }
        }
      )
    }
  }
}

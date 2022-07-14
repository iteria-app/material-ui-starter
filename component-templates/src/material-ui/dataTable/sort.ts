import {
  GridSortModel,
  GridSortItem,
  GridSortDirection,
} from '@mui/x-data-grid'

export const sortQueryFromGridData = (sort: GridSortModel) => {
  let sortQuery: any = {}
  const sortModels: GridSortItem[] | any = sortModelFromDataGrid(sort)
  sortModels.forEach((sortModel: GridSortItem) => {
    const sortColumnFiled: string = sortModel?.field
    const sortValue: GridSortDirection = sortModel?.sort
    sortQuery = sortRelationships(sortColumnFiled, sortValue)
  })
  return sortQuery
}

const sortModelFromDataGrid = (sort: GridSortModel) => {
  const sortModel = sort
  if (sortModel) return sortModel
  return {}
}

const sortRelationships = (
  sortColumnField: string,
  sortValue: GridSortDirection
) => {
  let tables: string[] = sortColumnField.split('.')
  const lastTable = tables.pop()
  let query: any = {}

  if (!lastTable) {
    query[sortColumnField] = sortValue
    return query
  }
  query[lastTable] = sortValue

  tables.reverse().forEach((table) => {
    const oldQuery = query
    query = {}
    query[table] = oldQuery
  })

  return query
}

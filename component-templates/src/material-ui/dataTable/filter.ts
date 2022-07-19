import InputFilterInteger from '@iteria-app/component-templates/src/components/InputFilterInteger'
import {
  GridFilterModel,
  GridColDef,
  GridFilterItem,
  getGridNumericColumnOperators,
  GridColTypeDef,
  getGridStringOperators,
  GridFilterOperator,
} from '@mui/x-data-grid'

import {
  getNumberFilterOperator,
  getStringFilterOperator,
  getDateFilterOperator,
  getBooleanFilterOperator,
  OperatorTypesValues,
} from '../../gql/hasura/filterQueries'

export const filterDataGrid = (
  filter: GridFilterModel,
  columns: GridColDef[]
) => {
  const filteredValue: string = filterValueFromDataGrid(filter)
  if (filteredValue) {
    return getQueryFromDataGrid(filter, columns)
  }
  return
}

export const getQueryFromDataGrid = (
  filter: GridFilterModel,
  columns: GridColDef[]
) => {
  let filteredQueryForGraphQl: object = {}
  const columnDataByFilterColumnField = getColumnDataByFilterColumnField(
    filter,
    columns
  )
  const filterDataType = columnDataByFilterColumnField[0]?.type

  filteredQueryForGraphQl = filterDataByColumnTypeName(
    filter,
    columns,
    filterDataType,
    filteredQueryForGraphQl
  )

  return filteredQueryForGraphQl
}

const filterDataByColumnTypeName = (
  filter: GridFilterModel,
  columns: GridColDef[],
  filterDataType: string | undefined,
  filteredQueryForGraphQl: any
) => {
  if (filterDataType === 'string') {
    filteredQueryForGraphQl = getFilterGraphQlQuery(
      filter,
      columns,
      filteredQueryForGraphQl,
      getStringFilterOperator(filter)
    )
  } else if (filterDataType === 'number') {
    filteredQueryForGraphQl = getFilterGraphQlQuery(
      filter,
      columns,
      filteredQueryForGraphQl,
      getNumberFilterOperator(filter)
    )
  } else if (
    filterDataType === 'boolean' ||
    filterDataType === 'singleSelect'
  ) {
    filteredQueryForGraphQl = getFilterGraphQlQuery(
      filter,
      columns,
      filteredQueryForGraphQl,
      getBooleanFilterOperator(filter)
    )
  } else if (filterDataType === 'date' || filterDataType === 'dateTime') {
    filteredQueryForGraphQl = getFilterGraphQlQuery(
      filter,
      columns,
      filteredQueryForGraphQl,
      getDateFilterOperator(filter)
    )
  }

  return filteredQueryForGraphQl
}

const getFilterGraphQlQuery = (
  filter: GridFilterModel,
  columns: GridColDef[],
  filteredQueryForGraphQl: any,
  getTypeFilterOperator: OperatorTypesValues[]
) => {
  const filterOperatorList = getTypeFilterOperator
  const currentOperatorFromDataGrid = filterOperatorList.filter(
    (operator) => operator.dataGrid === filterOperatorFromDataGrid(filter)
  )

  const filterDataType = getColumnDataByFilterColumnField(filter, columns)[0]
    ?.type
  const graphQlQuery = currentOperatorFromDataGrid[0]?.graphQl

  if (filterDataType === 'date') {
    filteredQueryForGraphQl = dateAndDateTime(
      filter,
      filteredQueryForGraphQl,
      graphQlQuery,
      'date'
    )
  } else if (filterDataType === 'dateTime') {
    filteredQueryForGraphQl = dateAndDateTime(
      filter,
      filteredQueryForGraphQl,
      graphQlQuery,
      'dateTime'
    )
  } else {
    filteredQueryForGraphQl = filterRelationships(filter, graphQlQuery)
  }

  return filteredQueryForGraphQl
}

const filterRelationships = (filter: GridFilterModel, graphQlQuery: object) => {
  const columnName = filterColumnFieldFromDataGrid(filter)
  const names = columnName.split('.')
  let filteredQuery: any = {}
  let objectQuery: any = graphQlQuery

  names.reverse().forEach((name) => {
    filteredQuery[name] = objectQuery
    objectQuery = filteredQuery
    filteredQuery = {}
  })

  return objectQuery
}

const dateAndDateTime = (
  filter: GridFilterModel,
  filteredQueryForGraphQl: any,
  graphQlQuery: any,
  dateType: string
) => {
  if (filterOperatorFromDataGrid(filter) === 'not') {
    filteredQueryForGraphQl['_or'] = graphQlQuery[dateType]
  } else {
    filteredQueryForGraphQl = filterRelationships(
      filter,
      graphQlQuery[dateType]
    )
  }

  return filteredQueryForGraphQl
}

const filterColumnField = (filterModel: GridFilterItem) => {
  console.log(filterModel, 'filterModel')
  if (filterModel) {
    return filterModel?.columnField
  }
  return ''
}

const filterColumnOperator = (filterModel: GridFilterItem) => {
  if (filterModel) {
    return filterModel?.operatorValue
  }
  return ''
}

const getColumnDataByFilterColumnField = (
  filter: GridFilterModel,
  columns: GridColDef[]
) => {
  if (columns) {
    return columns.filter(
      (column) => column.field === filterColumnFieldFromDataGrid(filter)
    )
  }
  return []
}

const filterModelFromDataGrid = (filter: GridFilterModel) => {
  if (filter) {
    return filter?.items
  }
  return []
}

export const filterColumnFieldFromDataGrid = (filter: GridFilterModel) => {
  const filterModels = filterModelFromDataGrid(filter)
  for (const filterModel of filterModels) {
    return filterColumnField(filterModel)
  }
  return ''
}

const filterOperatorFromDataGrid = (filter: GridFilterModel) => {
  const filterModels = filterModelFromDataGrid(filter)
  for (const filterModel of filterModels) {
    return filterColumnOperator(filterModel)
  }
  return ''
}

export const filterValueFromDataGrid = (filter: GridFilterModel): string => {
  const filterModels = filterModelFromDataGrid(filter)
  for (const filterModel of filterModels) {
    const filteredValue: string = filterModel?.value
    if (filteredValue) return filteredValue
  }
  return ''
}

export const numberColumnType = getGridNumericColumnOperators().map(
  (operator) => ({
    ...operator,
    InputComponent: InputFilterInteger,
  })
)

export const createUuidColumnType: GridColTypeDef = {
  extendType: 'string',
  filterOperators: getGridStringOperators()
    .filter((operator) => operator.value === 'equals')
    .map((operator) => {
      return {
        ...operator,
      }
    }),
}

export const uuidColumnType = (): GridFilterOperator[] => {
  if (createUuidColumnType) {
    //@ts-ignore
    return createUuidColumnType?.filterOperators
  }
  return []
}

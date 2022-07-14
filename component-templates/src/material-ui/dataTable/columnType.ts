interface ColumnType {
  graphQl: string
  dataGrid: string
}

const tableColumnTypes = [
  {
    graphQl: 'Int',
    dataGrid: 'number',
  },
  {
    graphQl: 'BigInteger',
    dataGrid: 'number',
  },
  {
    graphQl: 'time',
    dataGrid: 'dateTime',
  },
  {
    graphQl: 'timestamp',
    dataGrid: 'dateTime',
  },
]

export const dataGridColumnType = (eFType: string) => {
  const tableColumnType = getTableColumnType(eFType)
  const eFColumnType = eFType.toLowerCase()
  if (tableColumnType.length > 0) {
    return tableColumnTypeValue(tableColumnType)
  }
  return eFColumnType
}

const tableColumnTypeValue = (tableColumnType: ColumnType[]) => {
  for (const columnType of tableColumnType) {
    return columnType.dataGrid
  }
}
const getTableColumnType = (eFType: string) => {
  if (eFType) {
    return tableColumnTypes.filter(
      (columnType) => columnType.graphQl === eFType
    )
  }
  return []
}

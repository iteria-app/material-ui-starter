import { GridColDef } from '@mui/x-data-grid'
import { numberColumnType } from './filter'

export const addCustomFilterOpperations = (columns: GridColDef[]) => {
  columns?.forEach((column) => {
    if (column?.type === 'number') {
      column.filterOperators = numberColumnType
    }
  })
}

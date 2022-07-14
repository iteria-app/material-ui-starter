import React from 'react'
import { GridRowParams, GridSortModel, MuiEvent } from '@mui/x-data-grid'
import { EntityTable } from '../dataTable/index'
import { Entity } from '../../gql'
import { IFilterState } from '../../gql/components/ListPageContainer'

export interface IFilterQuery {
  limit: number
  offset: number
  order_by: GridSortModel
}
export interface IEntityTableProps {
  onClickRow?: (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>,
    details?: any
  ) => void
  onChangeFilter?: (state: Partial<IFilterState>) => void
  data: any
  entityFields: Entity
  loading: boolean
  error: any
  filter?: IFilterQuery
  onChangePage: (state: number) => void
  onPageSize: (state: number) => void
  onSort: (state: object) => void
  onFilter: (state: object | undefined) => void
  offset: number
  page: number
  pageSize: number
  countRows: number
  setCountToRows: (state: number) => void
  onDeleteRow?: (value: any) => void
  onClickCreate?: () => void
  entity?: string
}

export const ListPagePlaceholder: React.FC<IEntityTableProps> = (
  props: IEntityTableProps
) => {
  return <EntityTable {...props} />
}

import React, { useReducer } from 'react'
import { GeneratedQueryVariables, useGeneratedQuery } from '../generated'
import { Error, Fetching, ListPagePlaceholder } from '../../material-ui'
import { Entity } from '../entity'
import { GridFilterModel, GridSortModel } from '@mui/x-data-grid'

type IFilterState = IGrommetFilterState & IMaterilaUIFilterState

export interface IGrommetFilterState {
  page: number
  pageSize: number
}

export interface IMaterilaUIFilterState {
  page: number
  pageSize: number
  rowCount?: number
  sortModel?: GridSortModel
  filterModel?: GridFilterModel
}

const filterInitialState: IFilterState = {
  page: 0,
  pageSize: 2,
}

const filter = (state: IFilterState): GeneratedQueryVariables => {
  const offset = state.page * state.pageSize
  return { limit: state.pageSize, offset: offset }
}

export const ListPageContainer: React.FC = () => {
  const [whereOrderByPagination, onChangeFilter] = useReducer(
    (state: IFilterState, newState: Partial<IFilterState>) => ({
      ...state,
      ...newState,
    }),
    filterInitialState
  )
  //@ts-ignore
  const [result] = useGeneratedQuery({
    variables: filter(whereOrderByPagination),
  })
  const useEntityFieldsQuery = (): Entity => {
    return { name: '', fields: [] }
  }

  const onClickRow = () => {
    return 1
  }

  const entityFields = useEntityFieldsQuery()
  // if (result.fetching) return <Fetching />
  // if (result.error) return <Error error={result.error} />
  return (
    <ListPagePlaceholder
      data={result.data}
      loading={result.fetching}
      error={result.error}
      onChangeFilter={onChangeFilter}
      entityFields={entityFields}
      onClickRow={onClickRow}
    />
  )
}

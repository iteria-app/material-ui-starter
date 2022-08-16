import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { Translate } from '@iteria-app/component-templates'
import FormatEntityField from './FormatEntityField'
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowParams,
  GridSortModel,
  MuiEvent,
} from '@mui/x-data-grid'
import { Card, Grid, LinearProgress } from '@mui/material'
import {
  TablePagination,
  SelectPerPage,
  controlNextButton,
  controlSiblings,
  filterDataGrid,
  sortQueryFromGridData,
  IFilterState,
} from '@iteria-app/component-templates'
import introspection from '../../../generated/introspect.json'
import { EntityListToolbar } from './EntityListToolbar'

export interface IFilterQuery {
  limit: number
  offset: number
  order_by: GridSortModel
}

export interface EntityTableProps {
  onClickRow?: (
    params: GridRowParams,
    event?: MuiEvent<React.SyntheticEvent>
  ) => void
  onChangeFilter?: (state: Partial<IFilterState>) => void
  data: any
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
  loading: boolean
  error: any
  topBar: boolean
}

const EntityDataTableView: React.FC<EntityTableProps> = ({
  onClickRow,
  onChangePage,
  onPageSize,
  setCountToRows,
  countRows,
  pageSize,
  page,
  onFilter,
  onSort,
  loading,
  error,
  data,
  topBar,
}) => {
  const [siblingCount, setSiblingCount] = useState(1)
  const [hideNextButton, setHideNextButton] = useState(false)
  const [searchText, setSearchText] = useState('')

  const introspectionOfData = introspection?.__schema?.types?.find(
    (type) => type?.name === 'Entity'
  )?.fields

  useEffect(() => {
    if (!data?.fetching) {
      controlNextButton({
        data: data?.Entity ?? [],
        countRows: countRows,
        hideNextButton: hideNextButton,
        setCountToRows: setCountToRows,
        setHideNextButton: setHideNextButton,
        page: page,
        pageSize: pageSize,
      })
      controlSiblings(data?.Entity ?? [], pageSize, page, setSiblingCount)
    }
  }, [data?.Entity])

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

  const getColumnGraphQlType = (fieldName: string) => {
    const field = introspectionOfData?.find(
      (field) => field?.name === fieldName
    )
    return field?.type?.ofType?.name ?? field?.type?.name
  }

  const getColumnType = (fieldName: string) => {
    const graphQlType = getColumnGraphQlType(fieldName)
    return (
      tableColumnTypes.find((type) => type.graphQl === graphQlType)?.dataGrid ??
      'string'
    )
  }

  const columns: GridColDef[] = [
    {
      field: 'FIELD',
      type: getColumnType('FIELD'),
      renderHeader: () => (
        <Translate
          entityName={'Entity'}
          fieldName={'FIELD'}
          defaultMessage={'HEADER_NAME'}
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => (
        <FormatEntityField value={params.row.FIELD} />
      ),
      columnType: getColumnGraphQlType('FIELD'),
    },
  ]

  const handlePage = (event: any, newPage: number) => {
    onChangePage(newPage)
  }

  const handlePageSize = (event: any) => {
    onPageSize(event.target.value)
    onChangePage(1)
  }

  const handleFilter = useCallback(
    (filter) => {
      onFilter?.(filterDataGrid(filter, columns))
      onChangePage(1)
    },
    [onFilter, handlePage]
  )

  const handleSort = (sort: GridSortModel) => {
    onSort(sortQueryFromGridData(sort))
  }

  const generateSearchQuery = (
    fieldNames: string[],
    searchText: string
  ): any => {
    if (fieldNames.length > 1) {
      return {
        [fieldNames[0]]: generateSearchQuery(fieldNames.splice(1), searchText),
      }
    } else {
      return {
        [fieldNames[0]]: {
          _ilike: `%${searchText}%`,
        },
      }
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let search: any[] | null = null
      if (searchText) {
        introspectionOfData?.forEach((field) => {
          if (
            field?.type?.name === 'String' ||
            field?.type?.ofType?.name === 'String'
          ) {
            if (!search) search = []
            search.push(
              generateSearchQuery(field?.name?.split('.'), searchText)
            )
          }
        })
      }
      onFilter(search ? { _or: search } : {})
      onChangePage(1)
    }, 300)
    return () => clearTimeout(delayDebounceFn)
  }, [searchText])

  return (
    <Card>
      <EntityListToolbar
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <DataGrid
        rows={data?.Entity ?? []}
        columns={columns}
        loading={loading}
        hideFooterPagination
        autoHeight={true}
        error={error}
        sortingMode="server"
        filterMode="server"
        onSortModelChange={handleSort}
        onFilterModelChange={handleFilter}
        onRowClick={(event) => {
          if (onClickRow) onClickRow(event.row)
        }}
        components={{
          LoadingOverlay: LinearProgress,
          Footer: () => (
            <Grid container>
              <TablePagination
                countRows={countRows}
                page={page}
                handlePage={handlePage}
                siblingCount={siblingCount}
                hideNextButton={hideNextButton}
              />
              <SelectPerPage
                pageSize={pageSize}
                handlePageSize={handlePageSize}
              />
            </Grid>
          ),
        }}
      />
    </Card>
  )
}

export default EntityDataTableView

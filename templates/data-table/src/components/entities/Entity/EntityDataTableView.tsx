import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { FilterProps, Translate } from '@iteria-app/component-templates'
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
import { EntityListToolbar } from './EntityDataTableToolbar'
import introspection from '../../../generated/introspect.json'

export interface IFilterQuery {
  limit: number
  offset: number
  orderBy: GridSortModel
}

export interface EntityTableProps {
  data: any
  filterProps: FilterProps
  onClickRow?: (state: number) => void
  onDeleteRow?: (value: any) => void
  loading: boolean
  error: any
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

const EntityDataTableView: React.FC<EntityTableProps> = ({
  data,
  filterProps,
  onClickRow,
  onDeleteRow,
  loading,
  error,
}) => {
  const [siblingCount, setSiblingCount] = useState(1)
  const [hideNextButton, setHideNextButton] = useState(false)
  const introspectionOfData = introspection?.__schema?.types?.find(
    (type) => type?.name === 'Entity'
  )?.fields

  const {
    page,
    pageSize,
    countRows,
    onSort,
    onChangePage,
    onPageSize,
    onFilter,
    setCountToRows,
  } = filterProps

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

  const columns = [
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

  return (
    <Card>
      <EntityListToolbar filterProps={filterProps} />
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

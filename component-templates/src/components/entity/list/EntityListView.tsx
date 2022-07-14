import React, { useCallback, useEffect, useState } from 'react'
import { Translate } from '@iteria-app/component-templates'
import FormatEntityField from './FormatEntityField'
import { useNavigate } from 'react-router-dom'
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowParams,
  GridSortModel,
  GridToolbarContainer,
  MuiEvent,
} from '@mui/x-data-grid'
import { Button, Grid, LinearProgress } from '@mui/material'
import {
  TablePagination,
  SelectPerPage,
  controlNextButton,
  controlSiblings,
  filterDataGrid,
  sortQueryFromGridData,
  IFilterState,
} from '@iteria-app/component-templates'
import { Add } from '@mui/icons-material'

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
}

const EntityListView: React.FC<IEntityTableProps> = (
  { 
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
    data
  }) => {
  const navigate = useNavigate()
  const [siblingCount, setSiblingCount] = useState(1)
  const [hideNextButton, setHideNextButton] = useState(false)

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
      controlSiblings(
        data?.Entity ?? [],
        pageSize,
        page,
        setSiblingCount
      )
    }
  }, [data?.Entity])

  const columns: GridColDef[] = [
    { 
      field: 'FIELD', 
      renderHeader: () => (
        <Translate
          entityName={'Entity'}
          fieldName={'FIELD'}
          defaultMessage={'HEADER_NAME'}
        />
      ),
      width: 150,
      renderCell: (params: GridCellParams) => (
        <FormatEntityField value={params} type="string" />
      ),
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
    const tmp = sort.map((item) => {
      const splitted = item.field.split('.')
      splitted.shift()
      return {
        field: splitted.join('.'),
        sort: item.sort,
      }
    })
    onSort(sortQueryFromGridData(tmp))
  }

  return (
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
      onRowClick={(props) => {
        return navigate(props.id.toString())
      }}
      components={{
        LoadingOverlay: LinearProgress,
        Toolbar: () => {
          return (
            <GridToolbarContainer>
              <Button
                startIcon={<Add />}
                color="primary"
                variant="contained"
                onClick={() => navigate('create')}
              >
                <Translate entityName={'Create'} />
              </Button>
            </GridToolbarContainer>
          )
        },
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
  )
}

export default EntityListView

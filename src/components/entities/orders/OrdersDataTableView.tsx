import { useFormikContext } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridSortModel } from '@mui/x-data-grid'
import { useIntl } from 'react-intl'
import { Button, Card, Grid, LinearProgress, Typography } from '@mui/material'
import {
  TablePagination,
  SelectPerPage,
  controlNextButton,
  controlSiblings,
  filterDataGrid,
  sortQueryFromGridData,
  FilterProps,
  Translate,
  Toolbar,
  CreateButton,
  useFilter,
  createNewElement,
  getSingularName,
  getRelationshipField,
} from '@iteria-app/component-templates'
import introspection from '../../../generated/introspect.json'
import * as generatedGraphql from '../../../generated/graphql'
export interface IFilterQuery {
  limit: number
  offset: number
  orderBy: GridSortModel
}
export interface OrdersTableProps {
  data: generatedGraphql.EntitiesQuery
  filterProps?: FilterProps
  onClickRow?: (state: number) => void
  onDeleteRow?: (value: any) => void
  loading: boolean
  error: generatedGraphql.IError | null
  relationshipName?: string
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
const OrdersDataTableView: React.FC<OrdersTableProps> = ({
  data,
  filterProps: filterPropsProp,
  onClickRow,
  onDeleteRow,
  loading,
  error,
  relationshipName,
}) => {
  const intl = useIntl()
  let formikContext
  const filterProps = filterPropsProp ?? useFilter()
  const [siblingCount, setSiblingCount] = useState(1)
  const [hideNextButton, setHideNextButton] = useState(false)
  if (!filterPropsProp) formikContext = useFormikContext()
  const setFieldValue = formikContext?.setFieldValue
  const entityIntrospection = introspection?.__schema?.types?.find(
    (type) => type?.name === 'orders'
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
    if (!loading) {
      controlNextButton({
        data: data ?? [],
        countRows: countRows,
        hideNextButton: hideNextButton,
        setCountToRows: setCountToRows,
        setHideNextButton: setHideNextButton,
        page: page,
        pageSize: pageSize,
      })
      controlSiblings(data ?? [], pageSize, page, setSiblingCount)
    }
  }, [data])
  const getColumnGraphQlType = (fieldName: string) => {
    const field = entityIntrospection?.find(
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
      field: 'title',
      type: getColumnType('title'),
      renderHeader: () => (
        <Translate
          entityName="orders"
          fieldName={getRelationshipField('title')}
          defaultMessage="Title"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-Orders"
            data-test-id={`table-row-Entity-${params.row.id}`}
          >
            <Typography>{params?.row?.title}</Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType('title'),
    },
    {
      field: 'order_date',
      type: getColumnType('order_date'),
      renderHeader: () => (
        <Translate
          entityName="orders"
          fieldName={getRelationshipField('order_date')}
          defaultMessage="Order date"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-Orders"
            data-test-id={`table-row-Entity-${params.row.id}`}
          >
            <Typography>
              {params?.row?.order_date
                ? intl.formatDate(params?.row?.order_date)
                : ''}
            </Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType('order_date'),
    },
    {
      field: 'shipped_date',
      type: getColumnType('shipped_date'),
      renderHeader: () => (
        <Translate
          entityName="orders"
          fieldName={getRelationshipField('shipped_date')}
          defaultMessage="Shipped date"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-Orders"
            data-test-id={`table-row-Entity-${params.row.id}`}
          >
            <Typography>
              {params?.row?.shipped_date
                ? intl.formatDate(params?.row?.shipped_date)
                : ''}
            </Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType('shipped_date'),
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
      {filterPropsProp && (
        <Toolbar filterProps={filterProps} introspection={entityIntrospection}>
          <CreateButton entityName="orders" />
        </Toolbar>
      )}
      <DataGrid
        rows={data ?? []}
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
          Footer: filterPropsProp
            ? () => (
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
              )
            : () => (
                <Button
                  style={{
                    margin: '12px',
                    float: 'left',
                  }}
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    formikContext.setValues(
                      createNewElement(
                        generatedGraphql,
                        introspection,
                        relationshipName ?? '',
                        formikContext.values
                      )
                    )
                  }}
                >
                  <Translate
                    entityName={getSingularName(relationshipName)}
                    fieldName="new"
                    defaultMessage={`Add new ${getSingularName(
                      relationshipName ?? 'element'
                    )}`}
                  />
                </Button>
              ),
        }}
      />
    </Card>
  )
}
export default OrdersDataTableView

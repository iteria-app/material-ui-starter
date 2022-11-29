import { useFormikContext } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridSortModel } from '@mui/x-data-grid'
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
export interface ProductsTableProps {
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
const ProductsDataTableView: React.FC<ProductsTableProps> = ({
  data,
  filterProps: filterPropsProp,
  onClickRow,
  onDeleteRow,
  loading,
  error,
  relationshipName,
}) => {
  let formikContext
  const filterProps = filterPropsProp ?? useFilter()
  const [siblingCount, setSiblingCount] = useState(1)
  const [hideNextButton, setHideNextButton] = useState(false)
  if (!filterPropsProp) formikContext = useFormikContext()
  const setFieldValue = formikContext?.setFieldValue
  const entityIntrospection = introspection?.__schema?.types?.find(
    (type) => type?.name === 'products'
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
      field: 'name',
      type: getColumnType('name'),
      renderHeader: () => (
        <Translate
          entityName="products"
          fieldName={getRelationshipField('name')}
          defaultMessage="Name"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-Products"
            data-test-id={`table-row-Entity-${params.row.id}`}
          >
            <Typography>{params?.row?.name}</Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType('name'),
    },
    {
      field: 'availability',
      type: getColumnType('availability'),
      renderHeader: () => (
        <Translate
          entityName="products"
          fieldName={getRelationshipField('availability')}
          defaultMessage="Availability"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-Products"
            data-test-id={`table-row-Entity-${params.row.id}`}
          >
            <Typography>{params?.row?.availability}</Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType('availability'),
    },
    {
      field: 'price',
      type: getColumnType('price'),
      renderHeader: () => (
        <Translate
          entityName="products"
          fieldName={getRelationshipField('price')}
          defaultMessage="Price"
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test="table-row-Products"
            data-test-id={`table-row-Entity-${params.row.id}`}
          >
            <Typography>{params?.row?.price}</Typography>
          </div>
        )
      },
      columnType: getColumnGraphQlType('price'),
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
          <CreateButton entityName="products" />
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
export default ProductsDataTableView

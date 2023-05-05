import { useFormikContext } from 'formik'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { GridSortModel } from '@mui/x-data-grid'
import { Card } from '@mui/material'
import {
  FilterProps,
  Toolbar,
  CreateButton,
  useFilter,
  getColumnType,
  DataTableFooter,
  controlSiblings,
  controlNextButton,
  valueGetter,
  onSortChanged,
  onFilterChanged,
  loadStateFromLocalStorage,
} from '@iteria-app/component-templates'
import introspection from '../../../generated/introspect.json'
import * as generatedGraphql from '../../../generated/graphql'
import { AgGridReact } from 'ag-grid-react'
import { ColumnApi, GridApi } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

export interface IFilterQuery {
  limit: number
  offset: number
  orderBy: GridSortModel
}

export interface EntityTableProps {
  data: generatedGraphql.EntitiesQuery
  filterProps?: FilterProps
  onClickRow?: (state: number) => void
  onDeleteRow?: (value: any) => void
  loading: boolean
  error: generatedGraphql.IError | null
  relationshipName?: string
}

const EntityAgGridView: React.FC<EntityTableProps> = ({
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
    (type) => type?.name === 'Entity'
  )?.fields

  const {
    countRows,
    handleFilter,
    handleSort,
    page,
    pageSize,
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

  const gridStyle = useMemo(() => ({ height: '100%' }), [])
  const containerStyle = useMemo(() => ({ width: '100%' }), [])
  const columns = [
    {
      field: 'FIELD',
      type: getColumnType(entityIntrospection, 'FIELD'),
    },
  ]

  const agColumns = columns.map((colum) => ({
    field: colum.field,
    valueGetter: valueGetter,
  }))

  const defaultColDef = {
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      suppressAndOrCondition: true,
    },
  }

  const [gridApi, setGridApi] = useState<GridApi>()
  const [gridColsApi, setGridColsApi] = useState<ColumnApi>()

  const onAgSortChanged = useCallback(() => {
    if (!gridApi || !gridColsApi) return
    onSortChanged(gridApi, gridColsApi, handleSort)
  }, [])

  const onAgFilterChanged = useCallback(() => {
    if (!gridApi || !gridColsApi) return
    onFilterChanged(gridApi, gridColsApi, columns, handleFilter)
  }, [gridApi, gridColsApi, columns, handleFilter])

  useEffect(() => {
    if (!gridApi || !gridColsApi) return
    loadStateFromLocalStorage(gridApi, gridColsApi)
  }, [gridColsApi, gridApi])

  return (
    <>
      <Card sx={{ paddingBottom: '16px' }}>
        {filterPropsProp && (
          <Toolbar
            filterProps={filterProps}
            introspection={entityIntrospection}
            entityName="Entity"
          >
            <CreateButton entityName="customers" />
          </Toolbar>
        )}
      </Card>
      <div style={containerStyle} className="ag-theme-alpine">
        <div style={gridStyle}>
          <AgGridReact
            rowData={data as any[]}
            defaultColDef={defaultColDef}
            columnDefs={agColumns}
            onGridReady={(params) => {
              setGridApi(params.api)
              setGridColsApi(params.columnApi)
            }}
            onFilterChanged={onAgFilterChanged}
            onSortChanged={onAgSortChanged}
            serverSideStoreType="partial"
            rowModelType="clientSide"
            domLayout={'autoHeight'}
            onRowClicked={(event) => {
              console.log('click', event)
              if (onClickRow) onClickRow(event.data)
            }}
          />
        </div>
      </div>
      <DataTableFooter
        filterProps={filterProps}
        siblingCount={siblingCount}
        hideNextButton={hideNextButton}
        formikContext={formikContext}
        relationshipName={relationshipName}
        generatedGraphql={generatedGraphql}
        introspection={introspection}
        showPagination={true}
      />
    </>
  )
}

export default EntityAgGridView

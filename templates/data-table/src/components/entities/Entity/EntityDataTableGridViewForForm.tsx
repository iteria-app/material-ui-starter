import { useFormikContext } from 'formik'
import React, { ReactNode, useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridSelectionModel } from '@mui/x-data-grid'
import { Card, LinearProgress, Radio } from '@mui/material'
import {
  controlNextButton,
  controlSiblings,
  FilterProps,
  Translate,
  Toolbar,
  CreateButton,
  useFilter,
  getRelationshipField,
  getColumnType,
  getColumnGraphQlType,
  DataTableFooter,
  getRowId,
} from '@iteria-app/component-templates'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/typography/FormatEntityField'
import introspection from '../../../generated/introspect.json'
import * as generatedGraphql from '../../../generated/graphql'

export interface EntityDataGridProps {
  data: generatedGraphql.EntitiesQuery
  filterProps?: FilterProps
  onClickRow?: (state: number) => void
  loading: boolean
  error: generatedGraphql.IError | null
  selectionModel?: MutableRefObject<GridSelectionModel>
  relationshipName?: string
  checkboxes?: boolean
  radio?: boolean
  rootName?: string
  fromLookup?: boolean
  children?: ReactNode
}

const EntityDataTableGridViewForForm: React.FC<EntityDataGridProps> = ({
  data,
  filterProps: filterPropsProp,
  selectionModel,
  onClickRow,
  checkboxes,
  radio,
  loading,
  error,
  relationshipName,
  rootName,
  fromLookup,
  children,
}) => {
  let formikContext
  const filterProps = filterPropsProp ?? useFilter()
  const [siblingCount, setSiblingCount] = useState(1))
  const [hideNextButton, setHideNextButton] = useState(false)
  const [internalSelectionModel, setInternalSelectionModel] =
    useState<GridSelectionModel>([])
  if (!filterPropsProp) formikContext = useFormikContext()
  const setFieldValue = formikContext?.setFieldValue
  const entityIntrospection = introspection?.__schema?.types?.find(
    (type) => type?.name === 'Entity'
  )?.fields

  const {
    page,
    pageSize,
    countRows,
    setCountToRows,
    handleFilter,
    handleSort,
  } = filterProps

  const radioColumn = {
    field: 'radiobutton',
    headerName: '',
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <Radio
        checked={internalSelectionModel?.[0] === params.id}
        value={params.id}
      />
    ),
  }

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

  const columns = [
    {
      field: 'FIELD',
      type: getColumnType(entityIntrospection, 'FIELD'),
      renderHeader: () => (
        <Translate
          entityName={'Entity'}
          fieldName={getRelationshipField('FIELD')}
          defaultMessage={'HEADER_NAME'}
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => {
        const index = params?.api?.getRowIndex(params.row.id)
        return (
          <div
            data-test={`table-row-${'Entity'}`}
            data-test-id={`table-row-${'Entity'}-${params.row.id}`}
          >
            <FormatEntityField
              value={params?.row?.FIELD}
              relationshipName={relationshipName}
              type={'string'}
              index={index}
              rootName={rootName}
              setFieldValue={setFieldValue}
            />
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'FIELD'),
    },
  ]

  if (fromLookup) {
    data = data?.Entity ?? []
  }

  return (
    <Card>
      {filterPropsProp && (
        <Toolbar
          filterProps={filterProps}
          introspection={entityIntrospection}
          entityName="Entity"
        >
          {children}
          {fromLookup && <CreateButton entityName="Entity" />}
        </Toolbar>
      )}
      <DataGrid
        checkboxSelection={checkboxes}
        disableSelectionOnClick={checkboxes}
        onSelectionModelChange={(newSelectionModel) => {
          if (selectionModel?.current) {
            selectionModel.current = newSelectionModel.map((id) =>
              data?.find((r) => r.id === id)
            )
            setInternalSelectionModel(newSelectionModel)
          }
        }}
        selectionModel={internalSelectionModel}
        keepNonExistentRowsSelected
        rows={data ?? []}
        columns={radio ? [radioColumn, ...columns] : columns}
        loading={loading}
        hideFooterPagination
        autoHeight={true}
        error={error}
        sortingMode="server"
        filterMode="server"
        onSortModelChange={handleSort}
        onFilterModelChange={(model) => handleFilter(model, columns)}
        onRowClick={(event) => {
          if (onClickRow) onClickRow(event.row)
        }}
        getRowId={getRowId}
        components={{
          LoadingOverlay: LinearProgress,
          Footer: () => (
            <DataTableFooter
              showPagination={!!filterPropsProp}
              filterProps={filterProps}
              siblingCount={siblingCount}
              hideNextButton={hideNextButton}
              formikContext={formikContext}
              relationshipName={relationshipName}
              generatedGraphql={generatedGraphql}
              introspection={introspection}
            />
          ),
        }}
      />
    </Card>
  )
}

export default EntityDataTableGridViewForForm

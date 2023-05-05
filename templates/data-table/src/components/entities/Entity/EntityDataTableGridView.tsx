import { useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridCellParams, GridSelectionModel } from '@mui/x-data-grid'
import { Card, LinearProgress } from '@mui/material'
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
  relationshipName?: string
  checkboxes?: boolean
  rootName?: string
  fromLookup?: boolean
}

const EntityDataTableGridView: React.FC<EntityDataGridProps> = ({
  data,
  filterProps: filterPropsProp,
  onClickRow,
  checkboxes,
  loading,
  error,
  relationshipName,
  rootName,
  fromLookup,
}) => {
  let formikContext
  const filterProps = filterPropsProp ?? useFilter()
  const [siblingCount, setSiblingCount] = useState(1)
  const [hideNextButton, setHideNextButton] = useState(false)
  const [selectionModel, setSelectionModel] =
    React.useState<GridSelectionModel>([])
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
          <CreateButton entityName="Entity" />
        </Toolbar>
      )}
      <DataGrid
        checkboxSelection={checkboxes}
        disableSelectionOnClick={checkboxes}
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel)
        }}
        selectionModel={selectionModel}
        keepNonExistentRowsSelected
        rows={data ?? []}
        columns={columns}
        loading={loading}
        hideFooterPagination
        autoHeight={true}
        error={error}
        sortingMode="server"
        filterMode="server"
        getRowId={getRowId}
        onSortModelChange={handleSort}
        onFilterModelChange={(model) => handleFilter(model, columns)}
        onRowClick={(event) => {
          if (onClickRow) onClickRow(event.row)
        }}
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

export default EntityDataTableGridView

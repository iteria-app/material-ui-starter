import React, {
  useEffect,
  useState,
  useCallback,
  componentDidMount,
} from 'react'
import { useIntl } from 'react-intl'
import { Card, Grid, LinearProgress } from '@mui/material'
import { useLocation } from 'react-router-dom'
import {
  fillFlatEntityFieldValueObject,
  generateEntityFieldValueObject,
  getVisibleFields,
} from '../../gql'
import { DataGrid, GridSortModel, GridCellParams } from '@mui/x-data-grid'
import Translate from '../../i18n/Translate'
import { stringPrettyCapitalize, valueFormatterFunction } from '../formatting'
import { IEntityTableProps } from '../listPage/ListPagePlaceholder'
import { Field, guessEntityDeleteField, isDeleted, setDeleted } from '../../gql'
import { sortQueryFromGridData } from './sort'
import { controlNextButton, controlSiblings } from '../pagination'
import { filterDataGrid } from './filter'
import { dataGridColumnType } from './columnType'
import { SelectPerPage } from '../../components/SelectPerPage'
import { TablePagination } from '../../components/TablePagination'
import { addCustomFilterOpperations } from './customFilterOperator'
import { Toolbar } from './Toolbar'
import { translateNestedField } from '../../gql/entity/translateNestedField'
import { objectRelations } from './objectRelations'
import { DeleteIconContainer } from '../../../material-ui'

export const EntityTable: React.FC<IEntityTableProps> = (
  props: IEntityTableProps
) => {
  const intl = useIntl()
  const location = useLocation()
  const [hideNextButton, setHideNextButton] = useState(false)
  const entityDeleteField = props.onDeleteRow
    ? guessEntityDeleteField(props.entityFields)
    : undefined

  const originalEF: Field = {
    name: props.entity,
    type: 'array',
    entityFields: structuredClone(props.entityFields),
  }

  const onDeleteRestore = (
    entityDeleteField: Field | undefined,
    item: any,
    itemDeleted: boolean | undefined
  ) => {
    setDeleted(entityDeleteField!, item, !itemDeleted)
    let newItem = {
      ...fillFlatEntityFieldValueObject(
        generateEntityFieldValueObject(originalEF, 0),
        item.valueOf()
      ),
      id: item.id,
      isDeleted: item.isDeleted,
    }

    if (props.onDeleteRow) {
      props.onDeleteRow(newItem)
    }
  }

  props = objectRelations(props)

  const columns =
    getVisibleFields(props.entityFields)?.map((eF: Field): any => {
      const nestedTranslation = translateNestedField(
        eF,
        props.entityFields.name
      )
      return entityDeleteField?.name === eF.name
        ? {
            field: eF.name,
            disableColumnMenu: true,
            sortable: false,
            minWidth: 68,
            flex: 1,
            renderHeader: () => (
              <Translate
                entityName={nestedTranslation.entityName}
                fieldName={nestedTranslation.fieldName}
                defaultMessage={stringPrettyCapitalize(
                  nestedTranslation.fieldName
                )}
              />
            ),
            renderCell: (params: GridCellParams) => {
              const item = params.row
              const itemDeleted = isDeleted(entityDeleteField!, item)

              return (
                <DeleteIconContainer
                  onDeleteRestore={onDeleteRestore}
                  entityDeleteField={entityDeleteField}
                  item={item}
                  itemDeleted={itemDeleted}
                />
              )
            },
          }
        : {
            field: eF.name,
            type: dataGridColumnType(eF.type),
            renderCell: valueFormatterFunction(
              eF.type,
              intl,
              props.entityFields ?? []
            ),
            renderHeader: () => (
              <Translate
                entityName={nestedTranslation.entityName}
                fieldName={nestedTranslation.fieldName}
                defaultMessage={stringPrettyCapitalize(
                  nestedTranslation.fieldName
                )}
              />
            ),
            sortable: true,
            minWidth: 150,
            flex: 2,
            columnType: eF.type,
          }
    }) ?? []

  addCustomFilterOpperations(columns)

  const [siblingCount, setSiblingCount] = useState(1)
  const [searchText, setSearchText] = useState('')

  const {
    data,
    onChangePage,
    onPageSize,
    onSort,
    onFilter,
    onClickRow,
    setCountToRows,
    countRows,
    pageSize,
    loading,
    error,
    page,
  } = props

  const handlePage = (event: any, newPage: number) => {
    onChangePage(newPage)
  }

  const handlePageSize = (event: any) => {
    onPageSize(event.target.value)
    onChangePage(1)
  }

  const handleSort = (sort: GridSortModel) => {
    onSort(sortQueryFromGridData(sort))
  }

  const handleFilter = useCallback(
    (filter) => {
      onFilter(filterDataGrid(filter, columns))
      onChangePage(1)
    },
    [onFilter, handlePage]
  )

  useEffect(() => {
    if (!loading) {
      controlNextButton({
        data: data,
        countRows: countRows,
        hideNextButton: hideNextButton,
        setCountToRows: setCountToRows,
        setHideNextButton: setHideNextButton,
        page: page,
        pageSize: pageSize,
      })
      controlSiblings(data, pageSize, page, setSiblingCount)
    }
  }, [data])

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
      if (searchText != '') {
        props.entityFields.fields.forEach((field) => {
          if (field.type === 'String') {
            if (!search) search = []
            search.push(generateSearchQuery(field.name.split('.'), searchText))
          }
        })
      }
      onFilter(search ? { _or: search } : {})
      onChangePage(1)
    }, 300)
    return () => clearTimeout(delayDebounceFn)
  }, [searchText])

  useEffect(() => {
    if (typeof onFilter == 'function') onFilter({})
    setSearchText('')
  }, [location.pathname])
  console.log(columns)
  return (
    <Card>
      <Toolbar
        props={props}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <DataGrid
        onRowClick={onClickRow}
        columns={columns}
        rows={data}
        sortingMode="server"
        filterMode="server"
        autoHeight={true}
        onSortModelChange={handleSort}
        onFilterModelChange={handleFilter}
        pageSize={pageSize}
        loading={loading}
        error={error}
        hideFooterPagination
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

export * from './Column'
export * from './columnType'
export * from './customFilterOperator'
export * from './filter'
export * from './FormEntityTable'
export * from './objectRelations'
export * from './sort'
export * from './Toolbar'

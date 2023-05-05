import { useFormikContext } from 'formik'
import React from 'react'
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
} from '@mui/material'
import {
  FilterProps,
  Translate,
  Toolbar,
  CreateButton,
  useFilter,
  getRelationshipField,
  getColumnType,
  getColumnGraphQlType,
} from '@iteria-app/component-templates'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/typography/FormatEntityField'
import introspection from '../../../generated/introspect.json'
import * as generatedGraphql from '../../../generated/graphql'

export interface EntityTableProps {
  data: generatedGraphql.EntitiesQuery
  filterProps?: FilterProps
  relationshipName?: string
  rootName?: string
}

const EntityTableView: React.FC<EntityTableProps> = ({
  data,
  filterProps: filterPropsProp,
  relationshipName,
  rootName,
}) => {
  let formikContext
  const filterProps = filterPropsProp ?? useFilter()

  if (!filterPropsProp) formikContext = useFormikContext()
  const setFieldValue = formikContext?.setFieldValue
  const entityIntrospection = introspection?.__schema?.types?.find(
    (type) => type?.name === 'Entity'
  )?.fields

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
      renderCell: (row: any, rowIndex: number) => {
        return (
          <div
            data-test={`table-row-${'Entity'}`}
            data-test-id={`table-row-${'Entity'}-${row.id}`}
          >
            <FormatEntityField
              value={row?.FIELD}
              relationshipName={relationshipName}
              rootName={rootName}
              type={'string'}
              index={rowIndex}
              setFieldValue={setFieldValue}
            />
          </div>
        )
      },
      columnType: getColumnGraphQlType(entityIntrospection, 'FIELD'),
    },
  ]

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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {columns.map((column) => (
              <TableCell>
                <column.renderHeader />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, rowIndex) => {
            return (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Typography>
                    <Translate
                      entityName={'Entity'}
                      fieldName="infoCell"
                      defaultMessage={'Entity'}
                    />
                  </Typography>
                </TableCell>
                {columns.map((column) => (
                  <TableCell>{column.renderCell(row, rowIndex)}</TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Card>
  )
}

export default EntityTableView

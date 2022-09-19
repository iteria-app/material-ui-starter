import React from 'react'
import { Translate } from '@iteria-app/component-templates'
import { useFormikContext } from 'formik'
import { DataGrid, GridCellParams } from '@mui/x-data-grid'
import { FormatEntityField } from '@iteria-app-mui/common'
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  LinearProgress,
} from '@mui/material'
import introspection from '../../../generated/introspect.json'
import { ArrowRight } from '@mui/icons-material'

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

const EntityDashboardTable = ({ data }: {data: any[]}) => {
  const entityIntrospection = introspection?.__schema?.types?.find(
    (type) => type?.name === 'Entity'
  )?.fields
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

  const getRelationshipField = (fieldName: string) => {
    return fieldName.includes('.')
      ? fieldName.split('.').slice(1).join('.')
      : fieldName
  }
  const columns = [
    {
      field: 'FIELD',
      type: getColumnType('FIELD'),
      renderHeader: () => (
        <Translate
          entityName={'Entity'}
          fieldName={getRelationshipField('FIELD')}
          defaultMessage={'HEADER_NAME'}
        />
      ),
      minWidth: 150,
      flex: 2,
      renderCell: (params: GridCellParams) => (
        <FormatEntityField
          value={params?.row?.FIELD}
          type={'string'}
        />
      ),
    },
  ]
  return (
    <Card sx={{minWidth: '300px'}}>
      <CardHeader title="Latest Orders" />
      <Box>
        <DataGrid
          sx={{ padding: '0!important' }}
          rows={data.slice(0,7) ?? []}
          columns={columns}
          hideFooter
          autoHeight={true}
          sortingMode="server"
          filterMode="server"
          components={{
            LoadingOverlay: LinearProgress,
          }}
        />
      </Box>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRight />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  )
}

export default EntityDashboardTable

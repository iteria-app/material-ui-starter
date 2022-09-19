import React from 'react'
import { useFormikContext } from 'formik'
import { Translate, createNewElement } from '@iteria-app/component-templates'
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import * as generatedGraphql from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/formik/FormatEntityField'

interface IProps {
  relationshipName: string
  entityName: string
}

const EntityFormTable: React.FC<IProps> = ({ relationshipName }) => {
  const { values, setFieldValue, setValues } = useFormikContext()

  const columns = [
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
      renderCell: (params) => (
        <FormatEntityField
          type={'string'}
          index={params.api.getRowIndex(params.row.id)}
          setFieldValue={setFieldValue}
        />
      ),
    },
  ]

  return (
    <FormCard title={relationshipName ?? 'Entity'}>
      <DataGrid
      rows={values?.[relationshipName] ?? []}
      columns={columns}
      hideFooterPagination
      autoHeight={true}
      components={{
        Footer: () => (
          <Button
            style={{
              margin: '12px',
              float: 'left',
            }}
            variant="contained"
            color="secondary"
            onClick={() => {
              setValues(
                createNewElement(
                  generatedGraphql,
                  introspection,
                  relationshipName,
                  values
                )
              )
            }}
          >
            <Translate entityName={'Add new element'} />
          </Button>
        ),
      }}
    />
    </FormCard>
  )
}

export default EntityFormTable

import React from 'react'
import { LookupDialog } from './LookupDialog'
import EntityDataTableContainerForForm from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableContainerForForm'
import EntityDataTableGridViewForForm from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableGridViewForForm'
import Button from '@mui/material/Button'
import { Search } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'

type Props = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  replacedValue: string
}

export const EntityLookupDialogWrapperForForm = ({
  setFieldValue,
  replacedValue,
}: Props) => {
  return (
    <LookupDialog
      Container={EntityDataTableContainerForForm}
      View={EntityDataTableGridViewForForm}
      radio
      onSubmit={(rows) => {
        setFieldValue(replacedValue, rows?.[0], false)
      }}
      title={replacedValue}
    >
      <Button
        color="secondary"
        variant="contained"
        startIcon={<Search />}
        style={{ margin: '16px' }}
      >
        <Translate
          entityName={replacedValue}
          fieldName={'lookup'}
          defaultMessage={`Lookup ${replacedValue}`}
        />
      </Button>
    </LookupDialog>
  )
}

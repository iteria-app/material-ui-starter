import React from 'react'
import { LookupDialog } from './LookupDialog'
import EntityCreateContainer from '@iteria-app-mui/common/src/components/entities/Entity/EntityCreateContainer'
import EntityCreateFormView from '@iteria-app-mui/common/src/components/entities/Entity/EntityCreateFormView'
import Button from '@mui/material/Button'
import { Search } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'

type Props = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  replacedValue: string
}

export const EntityCreateLazyWrapper = ({
  setFieldValue,
  replacedValue,
}: Props) => {
  return (
    <LookupDialog
      Container={EntityCreateContainer}
      View={EntityCreateFormView}
      onClickRow={(row) => {
        setFieldValue(replacedValue, row, false)
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

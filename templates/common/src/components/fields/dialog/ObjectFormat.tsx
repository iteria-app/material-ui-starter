import React from 'react'
import { Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import EntityForm from '../Entity/EntityForm'
import { LookupDialog } from '@iteria-app-mui/common/src/components/entities/LookupDialog'
import { Translate } from '@iteria-app/component-templates'
import { EntityFragment } from '../../../generated/graphql'

type ObjectFormatProps = {
  value: EntityFragment
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const ObjectFormat = ({
  setFieldValue, value
}: ObjectFormatProps): JSX.Element => (
  'FIELD' && (
    <LookupDialog
      data={value}
      View={EntityForm}
      title={'FIELD'}
      relationshipName={'FIELD'}
    >
      <Button
        color="secondary"
        variant="contained"
        startIcon={<Search />}
        style={{ margin: '16px' }}
      >
        <Translate
          entityName={'Entity'}
          fieldName={`${'FIELD'}.edit`}
          defaultMessage={`Edit ${'FIELD'}`}
        />
      </Button>
    </LookupDialog>
  )
)

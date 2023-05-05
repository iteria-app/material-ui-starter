import React from 'react'
import EntityDataTableGridViewForForm from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableGridViewForForm'
import { LookupDialog } from '@iteria-app-mui/common/src/components/entities/LookupDialog'
import { EntityFragment } from '../../../generated/graphql'
import { Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'

interface ArrayFormatProps {
  value: EntityFragment[]
  length: number
}

export const ArrayFormat = ({ value, length }: ArrayFormatProps) => {
  return (
    'FIELD' && (
      <LookupDialog
        data={value}
        View={EntityDataTableGridViewForForm}
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
}

import React from 'react'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'
import { Button } from '@mui/material'
import {
  handleArrayRealtionshipSubmit,
  Translate,
} from '@iteria-app/component-templates'
import { LookupDialog } from '@iteria-app-mui/common/src/components/entities/LookupDialog'
import EntityDataTableGridViewForForm from '../../entities/Entity/EntityDataTableGridViewForForm'
import * as generatedGraphql from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'

interface ArrayFormatProps {
  value: EntityFragment[]
  length: number
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const ArrayFormat = ({
  value,
  length,
  setFieldValue,
}: ArrayFormatProps) => {
  return (
    <FormCard title={'FIELD'} length={length}>
      <EntityDataTableGridViewForForm
        data={value}
        relationshipName={'FIELD'}
        rootName={'ROOT_NAME'}
      />
      <LookupDialog
        checkboxes
        onSubmit={(rows) => {
          handleArrayRealtionshipSubmit(
            value,
            setFieldValue,
            generatedGraphql,
            introspection,
            'ROOT_NAME',
            'FIELD',
            rows,
          )
        }}
        title={'FIELD'}
      >
        <Button color="secondary" variant="contained">
          <Translate
            entityName={'FIELD'}
            fieldName={'new'}
            defaultMessage={`Add new ${'FIELD'}`}
          />
        </Button>
      </LookupDialog>
    </FormCard>
  )
}

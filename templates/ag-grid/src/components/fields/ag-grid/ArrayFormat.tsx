import React from 'react'
import EntityAgGridView from '../Entity/EntityAgGridView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'
import { Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import { createNewElement, Translate } from '@iteria-app/component-templates'
import { LookupDialog } from '@iteria-app-mui/common/src/components/entities/LookupDialog'
import EntityDataTableView from '../../entities/Entity/EntityDataTableView'
import * as generatedGraphql from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
import type { FormikProps, FormikValues } from 'formik'

interface ArrayFormatProps {
  value: EntityFragment[]
  length: number
  formikProps: FormikProps<FormikValues>
}

export const ArrayFormat = ({
  value,
  length,
  formikProps,
}: ArrayFormatProps) => {
  return (
    <FormCard title={'FIELD'} length={length}>
      <EntityAgGridView data={value} relationshipName={'FIELD'} />
      <LookupDialog
        checkboxes
        onSubmit={(rows) => {
          const rowData = formikProps?.values?.['FIELD']
          const relations = new Set<string>()
          rowData.forEach((row) => {
            for (const [key, val] of Object.entries(row)) {
              if (
                typeof val === 'object' &&
                val != null &&
                val?.length === undefined
              )
                relations.add(key)
            }
          })
          formikProps.setValues(
            createNewElement(
              generatedGraphql,
              introspection,
              'FIELD',
              formikProps.values,
              relations.size > 0 ? rows : null
            )
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

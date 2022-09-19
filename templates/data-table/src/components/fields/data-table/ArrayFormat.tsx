import React from 'react'
import { Field as FormikField } from 'formik'
import EntityDataTableView from '../Entity/EntityDataTableView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'

export const ArrayFormat = ({ value, relationshipName, index }) => {
  return (
    <FormCard title={'FIELD'}>
      <FormikField name={'FIELD'}>
        {({ field }: any) => {
          return (
            <EntityDataTableView
              data={field?.value}
              relationshipName={'FIELD'}
            />
          )
        }}
      </FormikField>
    </FormCard>
  )
}

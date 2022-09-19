import React from 'react'
import { Field as FormikField } from 'formik'
import EntityCardListItem from '../Entity/EntityCardListItem'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'

export const ObjectFormat = ({ value, relationshipName, index }) => {
  return (
    <FormCard title={'FIELD'}>
      <FormikField name={'FIELD'}>
        {({ field }: any) => {
          return <EntityCardListItem data={field?.value} />
        }}
      </FormikField>
    </FormCard>
  )
}

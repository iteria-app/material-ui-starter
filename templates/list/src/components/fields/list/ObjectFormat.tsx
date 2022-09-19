import React from 'react'
import { Field as FormikField } from 'formik'
import EntityListItem from '../Entity/EntityListItem'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'

export const ObjectFormat = ({ value, relationshipName, index }) => {
  return (
    <FormCard title={'FIELD'}>
      <FormikField name={'FIELD'}>
        {({ field }: any) => {
          return <EntityListItem data={field?.value} />
        }}
      </FormikField>
    </FormCard>
  )
}

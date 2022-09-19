import React from 'react'
import { Field as FormikField } from 'formik'
import EntityBabylonView from '../../entities/Entity/EntityBabylonView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'

export const ObjectFormat = ({ value, relationshipName, index }) => {
  return (
    <FormCard title={'FIELD'}>
      <FormikField name={'FIELD'}>
        {({ field }: any) => {
          return <EntityBabylonView data={field?.value} />
        }}
      </FormikField>
    </FormCard>
  )
}

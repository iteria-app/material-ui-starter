import React from 'react'
import EntityMapView from '../Entity/EntityMapView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'

export const ArrayFormat = ({ value }) => {
  return (
    <FormCard title={'FIELD'} length={12}>
      <EntityMapView data={value} />
    </FormCard>
  )
}

import React from 'react'
import EntityCardListView from '../Entity/EntityCardListView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'

interface ArrayFormatProps {
  value: EntityFragment[]
  length: number
}

export const ArrayFormat = ({ value, length }: ArrayFormatProps) => (
  <FormCard title={'FIELD'} length={length}>
    <EntityCardListView data={value} relationshipName={'FIELD'} />
  </FormCard>
)

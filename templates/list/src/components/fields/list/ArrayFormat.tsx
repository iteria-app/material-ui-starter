import React from 'react'
import EntityListView from '../Entity/EntityListView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'

interface ArrayFormatProps {
  value: EntityFragment[]
  length: number
}

export const ArrayFormat = ({ value, length }: ArrayFormatProps) => (
  <FormCard title={'FIELD'} length={length}>
    <EntityListView data={value} relationshipName={'FIELD'} />
  </FormCard>
)

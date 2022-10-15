import React from 'react'
import EntityDataTableView from '../Entity/EntityDataTableView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'

interface ArrayFormatProps {
  value: EntityFragment[]
  length: number
}

export const ArrayFormat = ({ value, length }: ArrayFormatProps) => {
  return (
    <FormCard title={'FIELD'} length={length}>
      <EntityDataTableView data={value} relationshipName={'FIELD'} />
    </FormCard>
  )
}

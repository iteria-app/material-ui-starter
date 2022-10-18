import React from 'react'
import EntityBarGraph from '../Entity/EntityDashboardBarGraph'
import { EntityFragment } from '../../../generated/graphql'

interface ArrayFormatProps {
  value: EntityFragment[]
}

export const ArrayFormat = ({ value }: ArrayFormatProps) => (
  <EntityBarGraph data={value} relationshipName={'FIELD'} />
)

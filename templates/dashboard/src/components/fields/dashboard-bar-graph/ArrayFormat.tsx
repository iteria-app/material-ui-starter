import React from 'react'
import EntityDashboardBarGraph from '../Entity/EntityDashboardBarGraph'
import { EntityFragment } from '../../../generated/graphql'

interface ArrayFormatProps {
  value: EntityFragment[]
}

export const ArrayFormat = ({ value }: ArrayFormatProps) => (
  <EntityDashboardBarGraph data={value} relationshipName={'FIELD'} />
)

import React from 'react'
import EntityDashboardPieChart from '../Entity/EntityDashboardPieChart'
import { EntityFragment } from '../../../generated/graphql'

interface ArrayFormatProps {
  value: EntityFragment[]
}

export const ArrayFormat = ({ value }: ArrayFormatProps) => {
  return <EntityDashboardPieChart data={value} relationshipName={'FIELD'} />
}

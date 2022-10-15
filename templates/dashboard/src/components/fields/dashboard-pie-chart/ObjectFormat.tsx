import React from 'react'
import EntityDashboardPieChart from '../Entity/EntityDashboardPieChart'
import { EntityFragment } from '../../../generated/graphql'

interface ObjectFormatProps {
  value: EntityFragment
}

export const ObjectFormat = ({ value }: ObjectFormatProps) => {
  return <EntityDashboardPieChart data={value} relationshipName={'FIELD'} />
}

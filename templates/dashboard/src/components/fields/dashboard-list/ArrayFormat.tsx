import React from 'react'
import EntityDashboardList from '../Entity/EntityDashboardList'
import { EntityFragment } from '../../../generated/graphql'

interface ArrayFormatProps {
  value: EntityFragment[]
}

export const ArrayFormat = ({ value }: ArrayFormatProps) => (
  <EntityDashboardList data={value} relationshipName={'FIELD'} />
)

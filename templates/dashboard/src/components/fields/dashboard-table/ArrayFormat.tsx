import React from 'react'
import EntityDashboardTable from '../Entity/EntityDashboardTable'
import { EntityFragment } from '../../../generated/graphql'

interface ArrayFormatProps {
  value: EntityFragment[]
}

export const ArrayFormat = ({ value }: ArrayFormatProps) => (
  <EntityDashboardTable data={value} />
)

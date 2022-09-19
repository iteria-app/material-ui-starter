import React from 'react'
import EntityDashboardTable from '../Entity/EntityDashboardTable'

export const ArrayFormat = ({ value, relationshipName, index }) => {
  return <EntityDashboardTable data={value} />
}

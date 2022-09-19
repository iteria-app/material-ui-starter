import React from 'react'
import EntityDashboardList from '../Entity/EntityDashboardList'

export const ArrayFormat = ({ value, relationshipName, index }) => {
  return <EntityDashboardList data={value} />
}

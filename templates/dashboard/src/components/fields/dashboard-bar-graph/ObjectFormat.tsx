import React from 'react'
import EntityDashboardBarGraph from '../Entity/EntityDashboardBarGraph'

export const ObjectFormat = ({ value, relationshipName, index }) => {
  return <EntityDashboardBarGraph data={value} />
}

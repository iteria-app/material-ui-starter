import React from 'react'
import EntityBarGraph from '../Entity/EntityDashboardBarGraph'

export const ArrayFormat = ({ value, relationshipName, index }) => {
  return <EntityBarGraph data={value} />
}

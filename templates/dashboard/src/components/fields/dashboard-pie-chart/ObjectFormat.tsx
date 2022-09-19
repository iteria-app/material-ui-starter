import React from 'react'
import EntityDashboardPieChart from '../Entity/EntityDashboardPieChart'

export const ObjectFormat = ({ value, relationshipName, index }) => {
        return <EntityDashboardPieChart data={value} />
}

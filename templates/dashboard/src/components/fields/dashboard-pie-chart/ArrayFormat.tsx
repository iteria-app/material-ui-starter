import React from 'react'
import EntityDashboardPieChart from "../Entity/EntityDashboardPieChart"

export const ArrayFormat = ({value, relationshipName, index}) => {
    return <EntityDashboardPieChart data={value}/>
}

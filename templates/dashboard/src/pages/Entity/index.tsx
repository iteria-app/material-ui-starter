import React from 'react'
import EntityDashboardView from '../../components/entities/Entity/EntityDashboardView'
import EntityDashboardContainer from '../../components/entities/Entity/EntityDashboardContainer'

const DashboardPage: React.FC = () => {
  return (
    <EntityDashboardContainer
      View={({ data }) => (
        <EntityDashboardView data={data} />
      )}
    />
  )
}

export default DashboardPage

import React from 'react'
import EntityDashboardCards from '../../components/entities/Entity/EntityDashboardCards'
import EntityDashboardContainer from '../../components/entities/Entity/EntityDashboardContainer'

const DashboardPage: React.FC = () => {
  return (
    <EntityDashboardContainer
      View={({ data }) => (
        <EntityDashboardCards data={data} loading={data?.fetching} />
      )}
    />
  )
}

export default DashboardPage

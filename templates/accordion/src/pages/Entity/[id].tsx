import React from 'react'
import EntityTabsDetail from '@iteria-app-mui/common/src/components/entities/Entity/EntityTabsDetail'
import { Outlet } from 'react-router-dom'

const EntityFormPage: React.FC = () => {
  return (
    <>
      <EntityTabsDetail />
      <Outlet />
    </>
  )
}

export default EntityFormPage

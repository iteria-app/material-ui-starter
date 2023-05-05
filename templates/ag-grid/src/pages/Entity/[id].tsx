import React from 'react'
import { Outlet } from 'react-router-dom'
import EntityTabsDetail from '@iteria-app-mui/common/src/components/entities/Entity/EntityTabsDetail'

const EntityFormPage: React.FC = () => {
  return (
    <>
      <EntityTabsDetail />
      <Outlet />
    </>
  )
}

export default EntityFormPage

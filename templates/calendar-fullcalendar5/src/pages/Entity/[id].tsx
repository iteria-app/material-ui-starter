import React from 'react'
import EntityTabs from '@iteria-app-mui/common/src/components/entities/Entity/EntityTabs'
import { Outlet } from 'react-router-dom'

const EntityFormPage: React.FC = () => {
  return (
    <>
      <EntityTabs isDetail={true} />
      <Outlet />
    </>
  )
}

export default EntityFormPage

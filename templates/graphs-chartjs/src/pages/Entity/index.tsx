import React from 'react'
import { Outlet } from 'react-router-dom'
import EntityTabsList from '@iteria-app-mui/common/src/components/entities/Entity/EntityTabsList'

const EntityManyPage: React.FC = () => {
  return (
    <>
      <EntityTabsList />
      <Outlet />
    </>
  )
}

export default EntityManyPage

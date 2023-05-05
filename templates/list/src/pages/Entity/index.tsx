import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import { WrapperForContentBesidesDrawer } from '@iteria-app/component-templates'
import EntityTabsList from '@iteria-app-mui/common/src/components/entities/Entity/EntityTabsList'

const EntityManyPage: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <WrapperForContentBesidesDrawer open>
          <EntityTabsList />
          <Outlet />
        </WrapperForContentBesidesDrawer>
      </Box>
    </>
  )
}

export default EntityManyPage

import React from 'react'
import EntityTabsList from '@iteria-app-mui/common/src/components/entities/Entity/EntityTabsList'
import { Outlet } from 'react-router-dom'
import { WrapperForContentBesidesDrawer } from '@iteria-app/component-templates'
import { Box } from '@mui/material'

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

export const INDEX_ROUTE = 'data-table'

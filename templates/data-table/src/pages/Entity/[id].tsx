import React from 'react'
import EntityTabsDetail from '@iteria-app-mui/common/src/components/entities/Entity/EntityTabsDetail'
import { Outlet, useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Translate } from '@iteria-app/component-templates'

const EntityFormPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box
        key="price"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        <Button
          onClick={() => navigate('/app/Entity' + window?.location?.search)}
        >
          <ArrowBack />
          <Translate entityName="Back" />
        </Button>
        <EntityTabsDetail />
      </Box>
      <Outlet />
    </>
  )
}

export default EntityFormPage

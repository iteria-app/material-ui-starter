import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, styled, useTheme } from '@mui/material'
import NavBar from './NavBar'
import TopBar from './TopBar'
import { ErrorBoundary } from '@iteria-app/component-templates'

const drawerWidth = 256

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  height: '100vh',
  padding: '64px 24px 0px 24px',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

const DashboardLayout = (): JSX.Element => {
  const theme = useTheme()
  const [open, setOpen] = useState(true)

  return (
    <Box sx={{ display: 'flex', background: theme.palette.background.default }}>
      <TopBar open={open} onOpen={() => setOpen(!open)} />
      <NavBar open={open} drawerWidth={drawerWidth} />
      <Main open={open}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Main>
    </Box>
  )
}

export default DashboardLayout

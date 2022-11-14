import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, styled, useMediaQuery, useTheme } from '@mui/material'
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

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  })

  const [navBarOpen, setNavBarOpen] = useState(!isSmallScreen)

  return (
    <Box sx={{ display: 'flex', background: theme.palette.background.default }}>
      <TopBar navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
      <NavBar
        open={navBarOpen}
        drawerWidth={drawerWidth}
        setNavBarOpen={setNavBarOpen}
        isSmallScreen={isSmallScreen}
      />
      <Main open={navBarOpen}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Main>
    </Box>
  )
}

export default DashboardLayout

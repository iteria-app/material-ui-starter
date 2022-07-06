import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, styled, useTheme } from '@mui/material'
import NavBar from './NavBar'
import TopBar from './TopBar'

const drawerWidth = 256

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginTop: '48px',
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
        <Outlet />
      </Main>
    </Box>
  )
}

export default DashboardLayout

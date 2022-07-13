import React from 'react'
import { Box, Drawer, Typography, styled, List } from '@mui/material'
import { Users, Home, Code } from 'react-feather'
import { MenuItems, calculateMenuItems } from '@iteria-app/component-templates'
import * as graphqlGen from '../../../generated/graphql'
import Logo from '../../../components/Logo'

const PREFIX = 'StyledNavBar'
const classes = {
  root: `${PREFIX}-root`,
  mobileDrawer: `${PREFIX}-mobileDrawer`,
  desktopDrawer: `${PREFIX}-desktopDrawer`,
  avatar: `${PREFIX}-avatar`,
}
const StyledNavBar = styled(Box)(() => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.mobileDrawer}`]: {
    width: 256,
  },
  [`& .${classes.desktopDrawer}`]: {
    width: 256,
    top: 0,
  },
  [`& .${classes.avatar}`]: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}))

interface NavBarProps {
  open: boolean
  drawerWidth: number
}

const NavBar = ({ open, drawerWidth }: NavBarProps): JSX.Element => {
  const content = (
    <StyledNavBar
      height="100%"
      padding={'16px'}
      display="flex"
      flexDirection="column"
    >
      <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <Logo />
        <Typography variant="h1" sx={{ pt: '3px' }}>
          Lowcode
        </Typography>
      </Box>
      <Box>
        <List>
          <MenuItems
            items={[
              {
                href: '/app/dashboard',
                icon: Home,
                label: 'menu.dashboard',
                title: 'Dashboard',
              },
              ...calculateMenuItems(graphqlGen, Users, Code),
            ]}
          />
        </List>
      </Box>
    </StyledNavBar>
  )
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      {content}
    </Drawer>
  )
}

export default NavBar

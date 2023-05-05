import React from 'react'
import { Box, Drawer, styled, List, IconButton } from '@mui/material'
import { Users, Home } from 'react-feather'
import { MenuItems, calculateMenuItems } from '@iteria-app/component-templates'
import Logo from '../../../components/Logo'
import MenuIcon from '@mui/icons-material/Menu'
import { newRoutes } from '../../../routes'

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
  setNavBarOpen: (open: boolean) => void
  isSmallScreen: boolean
}

const NavBar = ({
  open,
  drawerWidth,
  setNavBarOpen,
  isSmallScreen,
}: NavBarProps): JSX.Element => {
  const content = (
    <StyledNavBar
      height="100%"
      padding={'16px'}
      display="flex"
      flexDirection="column"
    >
      <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
        <Logo />
        {isSmallScreen && (
          <IconButton
            aria-label="open drawer"
            onClick={() => {
              setNavBarOpen(!open)
            }}
            edge="start"
            sx={{ marginLeft: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Box>
      <Box>
        <List>
          <MenuItems
            items={calculateMenuItems(Users, newRoutes)}
            onOpen={
              isSmallScreen
                ? () => {
                    setNavBarOpen(!open)
                  }
                : undefined
            }
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
      }}
      PaperProps={{
        sx: { width: isSmallScreen ? '100vw' : drawerWidth },
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

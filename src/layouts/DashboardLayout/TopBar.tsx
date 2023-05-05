import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Box, Divider, IconButton, styled, Toolbar } from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined'
import {
  calculateMenuItems,
  LocaleSwitch,
  MenuItems,
  UserProfile,
} from '@iteria-app/component-templates'
import { locales } from '../../locale'
import { Users } from 'react-feather'
import { newRoutes } from '../../routes'
import Logo from '../../components/Logo'

const drawerWidth = 256

interface TopBarProps {
  navBarOpen: boolean
  setNavBarOpen: (open: boolean) => void
  rest?: any
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const TopBar = ({
  navBarOpen,
  setNavBarOpen,
  ...rest
}: TopBarProps): JSX.Element => {
  return (
    <AppBar open={navBarOpen} {...rest}>
      <Toolbar>
        <Logo />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              margin: '0 auto',
            }}
          >
            <MenuItems items={calculateMenuItems(Users, newRoutes)} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <IconButton>
              <Badge badgeContent={1} color="warning" variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Divider orientation="vertical" sx={{ height: '32px' }} />
            <LocaleSwitch locales={locales} />
            <UserProfile sourceUrl={window.location.pathname.toString()} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
}

export default TopBar

import React from 'react'
import PropTypes from 'prop-types'
import {
  Badge,
  Box,
  Divider,
  IconButton,
  styled,
  Toolbar,
  useTheme
} from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined'
import InputIcon from '@mui/icons-material/Input'
import Logo from '../../components/Logo'
import { LocaleSwitch, UserProfile } from '@iteria-app/component-templates'
import { locales } from '../../locale'

const drawerWidth = 256

interface TopBarProps {
  open: boolean
  onOpen: () => void
  rest?: any
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const TopBar = ({ open, onOpen, ...rest }: TopBarProps): JSX.Element => {
  return (
    <AppBar open={open} {...rest}>
      <Toolbar>
        <IconButton aria-label="open drawer" onClick={onOpen} edge="start">
          <MenuIcon />
        </IconButton>
        <Box flexGrow={1} />
        <IconButton>
          <Badge badgeContent={1} color="warning" variant="dot">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Divider orientation="vertical" sx={{ height: '32px' }} />
        <LocaleSwitch locales={locales} />
        <UserProfile sourceUrl={window.location.pathname.toString()} />
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
}

export default TopBar

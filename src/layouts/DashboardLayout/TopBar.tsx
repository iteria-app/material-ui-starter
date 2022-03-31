import React from 'react';
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined'
import InputIcon from '@mui/icons-material/Input'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import Logo from '../../components/Logo';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  // netlifyIdentity,
  ...rest
}) => {
  const classes = useStyles();
  
  // netlifyIdentity.on("login", user => {setUser(user)})
  // const [user, setUser] = useState(netlifyIdentity.currentUser())
  const [user, setUser] = useState(null)

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={1}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          {!user && 
          (<IconButton color="inherit" onClick={() => console.log("nic")/**netlifyIdentity.open("login")*/}>
            <LoginIcon />
          </IconButton>)}
          {user && 
          (<IconButton color="inherit" onClick={() => {
            console.log("nic")
            // netlifyIdentity.logout()
            //   ?.then(() => setUser(null))
          }}>
            <LogoutIcon />
          </IconButton>)}
          {/* <IconButton color="inherit">
            <InputIcon />
          </IconButton> */}
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;

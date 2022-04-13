import React from 'react';
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
// import InputIcon from '@mui/icons-material/Input'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from '../../components/Logo'
import { LocaleSwitch } from '@iteria-app/component-templates/src/i18n'
import { locales } from '../../locale'


const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({
  className,
  netlifyIdentity,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();

  console.log(netlifyIdentity)
  console.log(netlifyIdentity.currentUser())
  window.netlifyIdentity = netlifyIdentity;

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
          {netlifyIdentity.currentUser() || <IconButton onClick={()=> {
            console.log("Gonna login");
            console.log(netlifyIdentity.currentUser());
            netlifyIdentity.open("login");
            console.log("uz to zmizlo");
            }} color="inherit">
            <LoginIcon/>
          </IconButton>}
          {netlifyIdentity.currentUser() && <IconButton onClick={()=> {netlifyIdentity.logout()}} color="inherit">
            <LogoutIcon/>
          </IconButton>}
        </Hidden>
        <LocaleSwitch locales={locales} />
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

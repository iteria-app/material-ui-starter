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
import CommitIcon from '@mui/icons-material/Commit';
import Logo from '../../components/Logo'
import { LocaleSwitch } from '@iteria-app/component-templates/src/i18n'
import { locales } from '../../locale'
import * as netlifyIdentity from "netlify-identity-widget"

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

async function fetchHeadOid(){

  const resp = await fetch(`/.netlify/functions/GetFetchHeadOid`,
    {
        method: "POST",
    });

  const textResponse = await resp.json();
  return textResponse.gitHub.repository.defaultBranchRef.target.oid;

}

async function executeCommit(commitMessage: string){

  const headOid = await fetchHeadOid();

  const resp = await fetch(`/.netlify/functions/ExecuteCommitAddition`,
    {
        method: "POST",
        headers: {
            // ...auth?.authHeaders(),
            headOid: headOid,
            commitMessage: commitMessage,
            branchname: "build-branch",
            repositoryNameWithOwner: ""
        }
    });

  const textResponse = await resp.json();
  if(textResponse.ExecuteCommitErrors){
    alert("commit failed :(")
  } else {
    alert("commit successful :)")
  }
  return textResponse;
}

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();

  // Init netlify identity
  netlifyIdentity.on("login", user => {
    console.log("LOGGING IN")
  })

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
          {!netlifyIdentity.currentUser() && 
          <IconButton onClick={()=> {netlifyIdentity.open("login")}} color="inherit">
            <LoginIcon/>
          </IconButton>}
          {netlifyIdentity.currentUser() && 
          <Box>
            <IconButton onClick={()=> {netlifyIdentity.logout()}} color="inherit">
              <LogoutIcon/>
            </IconButton>
            {/* <IconButton color="inherit" onClick={() => {
                var commitMessage = prompt("Commit message: ")
                console.log("Commit message: " + commitMessage)
                executeCommit(commitMessage)
                .then((resp) => console.log(resp))
              }} >
              <CommitIcon/>
            </IconButton> */}
          </Box>
          }
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

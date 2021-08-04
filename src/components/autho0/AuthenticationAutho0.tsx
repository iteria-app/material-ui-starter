import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {
  Box, Typography
} from '@material-ui/core';

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationAutho0 = () => {
  const { isAuthenticated} = useAuth0();
  console.log(isAuthenticated, 'isAuthenticated');

  return (
    <>
      <Typography color="textPrimary" gutterBottom variant="h5">Auth0</Typography>
      <Box display="flex">
        <LoginButton />
        <LogoutButton />
      </Box>
    </>
  )
};

export default AuthenticationAutho0;
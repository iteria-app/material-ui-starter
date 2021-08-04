import React from "react";
import {
  Button, Box
} from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Box mr={2}>
      <Button
        color="primary"
        variant="contained"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    </Box>
  );
};

export default LoginButton;
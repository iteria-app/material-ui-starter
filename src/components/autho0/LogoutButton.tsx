import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Button, Box
} from '@material-ui/core';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Box>
      <Button
        color="primary"
        variant="contained"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log Out
      </Button>
    </Box>
  );
};

export default LogoutButton;
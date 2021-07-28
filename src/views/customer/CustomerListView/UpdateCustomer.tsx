import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//TODO return this
// import { useUpdateCustomerMutation } from 'src/generated/graphql'
import {
  Box,
  TextField,
} from '@material-ui/core';
import { UpdateProps } from './Types'

const useStyles = makeStyles((theme: any) => ({
  typography: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  box: {
    margin: theme.spacing(2),
  },
  textfield: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const UpdateCustomer: React.FC<UpdateProps> = ({ customer, handleClose }) => {
  const classes = useStyles();
  const [newName, setNewName] = React.useState<string>(null);
  const [newEmail, setNewEmail] = React.useState<string>(null);
  const [newPhoneNumber, setNewPhoneNumber] = React.useState<string>(null);
  //TODO return this
  // const [state, executeMutation] = useUpdateCustomerMutation();
  // const updateCustomerItems = [
  //   executeMutation,
  //   customer?.id,
  //   newName ? newName : customer?.name,
  //   newEmail ? newEmail : customer?.email,
  //   newPhoneNumber ? newPhoneNumber : customer?.phone,
  // ]
  // const submit = React.useCallback(() => {
  //   executeMutation({
  //     "id": customer?.id,
  //     "name": newName ? newName : customer?.name,
  //     "email": newEmail ? newEmail : customer?.email,
  //     "phone": newPhoneNumber ? newPhoneNumber : customer?.phone,
  //   })
  //   handleClose();
  // }, [updateCustomerItems])

  return (
    <Box maxWidth={500} maxHeight={400} className={classes.box}>
      <Typography variant="h3" className={classes.typography}>Update customer details</Typography>
      <TextField
        fullWidth
        className={classes.textfield}
        label="Change username"
        onChange={(event) => setNewName(event.target.value)}
        placeholder={customer?.name}
        variant="outlined" />
      <TextField
        fullWidth
        className={classes.textfield}
        label="Change email"
        onChange={(event) => setNewEmail(event.target.value)}
        placeholder={customer?.email}
        variant="outlined" />
      <TextField
        fullWidth
        className={classes.textfield}
        label="Change phone number"
        placeholder={customer?.phone}
        onChange={(event) => setNewPhoneNumber(event.target.value)}
        variant="outlined" />
        {/* //TODO return this */}
      {/* <Button color="primary" variant="contained" className={classes.button} onClick={submit}>
        Change details
      </Button> */}
    </Box>
  );
}
export default UpdateCustomer;
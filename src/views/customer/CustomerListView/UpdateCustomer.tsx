import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useMutation, gql } from 'urql';
import {
  Box,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    box: {
      margin: theme.spacing(2),
    },
    textfield:{
      marginTop: theme.spacing(2),
    },
    button:{
      margin: theme.spacing(1),
    }
  }),
);

const UpdateCustomer: React.FC<any> = ({customer, handleClose}) => {
  const classes = useStyles();
  const [newName,setNewName] = React.useState<String>(null);
  const [newEmail,setNewEmail] = React.useState<String>(null);
  const [newPhoneNumber,setNewPhoneNumber] = React.useState<String>(null);
  const [state, executeMutation] = useMutation(POST_MUTATION);
  const submit = React.useCallback(() => {
    executeMutation({ 
    "id": customer?.id,
    "name": newName ? newName : customer?.name,
    "email": newEmail ? newEmail : customer?.email,
    "phone": newPhoneNumber ? newPhoneNumber : customer?.phone,
  })
    handleClose();
  },[
    executeMutation,
    customer?.id,
    newName ? newName : customer?.name,
    newEmail ? newEmail : customer?.email,
    newPhoneNumber ? newPhoneNumber : customer?.phone,
  ])

  return (
    <Box maxWidth={500} maxHeight={400} className={classes.box}>
      <Typography variant="h3" className={classes.typography}>Update customer details</Typography>
      <TextField
        fullWidth
        className={classes.textfield}
        label="Change username"
        onChange={(event) => setNewName(event.target.value)}
        placeholder={customer?.name}
        variant="outlined"/>
      <TextField
        fullWidth
        className={classes.textfield}
        label="Change email"
        onChange={(event) => setNewEmail(event.target.value)}
        placeholder={customer?.email}
        variant="outlined"/>
      <TextField
        fullWidth
        className={classes.textfield}
        label="Change phone number"
        placeholder={customer?.phone}
        onChange={(event) => setNewPhoneNumber(event.target.value)}
        variant="outlined"/>
      <Button color="primary" variant="contained" className={classes.button} onClick={submit}>
        Change details
      </Button>
    </Box>
  );
}
export default UpdateCustomer;

const POST_MUTATION = gql`
  mutation MyMutation( $id: uuid! = "", $name: String! = "", $email: String! = "", $phone: String = "") {
    updateCustomer(pk_columns: {id: $id}, _set: {name: $name, email: $email, phone: $phone}) {
      name
      id
    }
  }
`;

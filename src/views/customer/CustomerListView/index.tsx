import React, { useState } from 'react';
import {
  Box,
  Container,
  makeStyles,
  Card
} from '@material-ui/core';
import Page from 'src/components/Page';
import CustomerTable from './CustomerTable';
import Toolbar from './Toolbar';
import { useSearchCustomersQuery } from 'src/generated/graphql'

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [searchCustomer, setSearchCustomer] = useState("");
  const search = "%" + searchCustomer + "%";
  const [result, _reexecuteQuery1] = useSearchCustomersQuery({
    variables: { search }
  })
  const { data, error, fetching } = result;

  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Page className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <Toolbar
          searchCustomer={searchCustomer}
          searchCustomerChange={(event) => setSearchCustomer(event.target.value)}
        />
        <Box mt={3}>
          <Card>
            <CustomerTable
              customers={fetching ? null : data.customers}
            />
          </Card>
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
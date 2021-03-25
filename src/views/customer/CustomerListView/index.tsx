import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import {
  createClient,
  Provider,
  debugExchange,
  cacheExchange,
  fetchExchange
} from 'urql';

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const client =  createClient({
  url: 'https://iteria-app-example01.herokuapp.com/v1/graphql',
  exchanges: [ debugExchange, cacheExchange, fetchExchange]
});

const CustomerListView = () => {
  const classes = useStyles();
  const [searchCustomer , setSearchCustomer] = useState("");
  return (
    <Page className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <Toolbar 
          searchCustomer={searchCustomer}
          onChange={(event) => setSearchCustomer(event.target.value)}
        />
        <Box mt={3}>
          <Provider value={client}>
            <Results
              searchCustomer={searchCustomer}
            />
          </Provider>
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
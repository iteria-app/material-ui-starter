import React, { useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import { createClient, Provider } from 'urql';

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
  fetchOptions: () => {
    return {
      headers: {
        'x-hasura-admin-secret' : 'iteria-app-example01-421769',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };
  },
});

const CustomerListView = () => {
  const classes = useStyles();
  const [inputSearch , setInputSearch] = useState("");
  return (
    <Page className={classes.root} title="Customers">
      <Container maxWidth={false}>
        <Toolbar 
          inputSearch={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
        />
        <Box mt={3}>
          <Provider value={client}>
            <Results 
              inputSearch={inputSearch} 
            />
          </Provider>
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;

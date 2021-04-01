import React from 'react';
import {
  Card,
  makeStyles
} from '@material-ui/core';
import { useQuery } from 'urql';
import Loading from './Loading';
import Table from './CustomerTable';
import { CustomersProps, ResultProps } from './Types'
import { SEARCH_CUSTOMER_QUERY } from './Graphql'

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const Results: React.FC<ResultProps> = ({ searchCustomer, ...rest }) => {
  const classes = useStyles();
  const search = "%" + searchCustomer + "%";
  const [result, _reexecuteQuery] = useQuery<CustomersProps>({
    query: SEARCH_CUSTOMER_QUERY,
    variables: { search },
  });

  const { data, error, fetching } = result;

  if (fetching) return (<Loading />);
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Card className={classes.root} {...rest}>
      <Table customers={data.customers} />
    </Card>
  );
};

export default Results;

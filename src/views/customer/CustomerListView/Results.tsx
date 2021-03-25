import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  makeStyles
} from '@material-ui/core';
import { useQuery, gql } from 'urql';
import Loading from './Loading';
import Table from './CustomerTable';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const SEARCH = gql`
  query Search($search: String!) {
    customers(where: {name: {_ilike: $search}}, order_by: {name: asc}) {
      id
      email
      name
      phone
      address
      avatarUrl
      createdAt
      updatedAt
    }
  }
`;

const Results: React.FC<any> = ({ searchCustomer, ...rest }) => {
  const classes = useStyles();
  const search = "%"+searchCustomer+"%";
  const [result, _reexecuteQuery] = useQuery({
    query: SEARCH,
    variables: {search},
  });

  const { data, error, fetching} = result;

  if (fetching) return ( <Loading/> );
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Card className={classes.root} {...rest}>  
      <Table customers={data.customers} />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  inputSearch: PropTypes.string
};

export default Results;
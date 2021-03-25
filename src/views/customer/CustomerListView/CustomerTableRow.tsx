import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Avatar,
  Box,
  Checkbox,
  TableCell,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const CustomerTableRow: React.FC<any> = ({ limit, customers ,selectedCustomerIds , handleSelectOne }) => {
  const classes = useStyles();

  return (
    <>
      {customers.slice(0, limit).map(customer => (
        <TableRow
          hover
          key={customer.id}
          aria-describedby={customer.id}
          selected={selectedCustomerIds.indexOf(customer.id) !== -1}
        >
          <TableCell padding="checkbox">
            <Checkbox
                checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                onChange={event => handleSelectOne(event, customer.id)}
                value="true"
            />
          </TableCell>
          <TableCell>
            <Box alignItems="center" display="flex">
              <Avatar
                className={classes.avatar}
                src={customer.avatarUrl}
                >
                {getInitials(customer.name)}
              </Avatar>
              <Typography color="textPrimary" variant="body1">
                {customer.name}
              </Typography>
            </Box>
          </TableCell>
          <TableCell>{customer.email}</TableCell>
          <TableCell>
            {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
          </TableCell>
          <TableCell>{customer.phone}</TableCell>
          <TableCell>
            {moment(customer.createdAt).format('DD/MM/YYYY')}
          </TableCell>
      </TableRow> 
      ))}
    </>
  );
};

CustomerTableRow.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array,
};

export default CustomerTableRow;
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
import UpdateCustomer from './UpdateCustomer';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const CustomerTableRow: React.FC<any> = ({ limit, customers ,selectedCustomerIds , handleSelectOne }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLTableRowElement | null>(null);
  const [customerToUpdate, setCustomerToUpdate] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
    setCustomerToUpdate(null)
  };

  const handleClick = (event: React.MouseEvent<HTMLTableRowElement>, customer) => {
    setAnchorEl(event.currentTarget);
    setCustomerToUpdate(customer);
  };
  return (
    <>
      {customers.slice(0, limit).map(customer => (  
        <TableRow
          hover
          onClick={e => handleClick(e, customer)}
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <UpdateCustomer 
          customer={customerToUpdate}
          handleClose={handleClose}
        />
      </Popover>
    </>
  );
};

CustomerTableRow.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array,
};

export default CustomerTableRow;
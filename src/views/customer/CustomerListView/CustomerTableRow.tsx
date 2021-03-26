import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
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
import { TableRowProps } from './Types'

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  editButton: {
    float: "right"
  }
}));

const CustomerTableRow: React.FC<TableRowProps> = ({ limit, customers, selectedCustomerIds, handleSelectOne }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);
  const [customerToUpdate, setCustomerToUpdate] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
    setCustomerToUpdate(null)
  };

  const handleClick = (event: React.MouseEvent<SVGSVGElement>, customer) => {
    setAnchorEl(event.currentTarget);
    setCustomerToUpdate(customer);
  };
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
            <EditIcon
              onClick={e => handleClick(e, customer)}
              className={classes.editButton} />
          </TableCell>
        </TableRow>
      ))}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
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

export default CustomerTableRow;
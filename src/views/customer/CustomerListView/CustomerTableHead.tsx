import React from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const CustomerTableRow: React.FC<any> = ({ customers ,selectedCustomerIds , handleSelectAll }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={selectedCustomerIds.length === customers.length}
            color="primary"
            indeterminate={
              selectedCustomerIds.length > 0 &&
              selectedCustomerIds.length < customers.length
            }
            onChange={handleSelectAll}
          />
        </TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Location</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Registration date</TableCell>
      </TableRow>
    </TableHead>  
  );
};

CustomerTableRow.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array,
};

export default CustomerTableRow;
import React from 'react';
import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const CustomerTableRow: React.FC<HeaderProps> = ({ customers, selectedCustomerIds, handleSelectAll }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            checked={customers ? selectedCustomerIds.length === customers.length : null}
            color="primary"
            indeterminate={
              customers ?
                selectedCustomerIds.length > 0 &&
                selectedCustomerIds.length < customers.length : null
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

export default CustomerTableRow;

type customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  address: { city: string, state: string, country: string };
  createdAt: string;
  updatedAt: string;
};
interface HeaderProps {
  customers?: customer[];
  selectedCustomerIds?: any[];
  handleSelectAll?: (event: any) => void;
}

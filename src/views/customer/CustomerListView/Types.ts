import { Customer } from 'src/generated/graphql';

export interface CustomersProps {
  customers: Customer[];
}

export interface HeaderProps {
  customers?: Customer[];
  selectedCustomerIds?: any[];
  handleSelectAll?: (event: any) => void;
}

export interface ResultProps {
  searchCustomer: string;
}

export interface TableRowProps {
  limit: number;
  customers: Customer[]
  selectedCustomerIds: any[];
  handleSelectOne: (event: any, id: any) => void;
}

export interface ToolbarProps {
  className?: string
  searchCustomer: string;
  searchCustomerChange: (event: any) => void;
}

export interface UpdateProps {
  customer: customer;
  handleClose: () => void
}

type customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  address: { 
    city: string, 
    state: string, 
    country: string
  };
  createdAt: string;
  updatedAt: string;
};
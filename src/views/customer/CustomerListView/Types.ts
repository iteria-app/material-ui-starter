export interface CustomersProps {
  customers: customer[];
}

export interface HeaderProps {
  customers?: customer[];
  selectedCustomerIds?: any[];
  handleSelectAll?: (event: any) => void;
}

export interface ResultProps {
  searchCustomer: string;
}

export interface TableRowProps {
  limit: number;
  customers: customer[]
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
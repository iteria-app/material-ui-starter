import data from '../customer/CustomerListView/data'
import React, { useState } from 'react';
import GeneratedTable from './GeneratedCustomersTable'

const CustomerListView = () => {
    const [customers] = useState(data);
  
    return (
     <GeneratedTable customers={customers} />
    );
  };
export default CustomerListView

import data from '../customer/CustomerListView/data'
import React, { useState } from 'react';
import GeneratedTable from './GeneratedCustomersTable'

const GeneratedCustomers = () => {
  const [customers] = useState(data);

  return (
    <GeneratedTable customers={customers} />
  );
};
export default GeneratedCustomers

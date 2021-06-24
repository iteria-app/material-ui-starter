import React from 'react'
import data from '../customer/CustomerListView/data';
import { GeneratedCustomerDetail } from './GeneratedCustomerDetail';
import { CustomerProps } from './types';

const CustomerDetailView = () => {
  const customer: CustomerProps = {
    avatarUrl: data[0].avatarUrl,
    name: data[0].name,
    createdAt: data[0].createdAt, //new Date(data[0].createdAt).toISOString().split('T')[0],
    email: data[0].email,
    phone: data[0].phone,
    updatedAt: 0,
    test2: 258
  };
  console.log(customer);
  return <GeneratedCustomerDetail {...customer} />;
};
export default CustomerDetailView;

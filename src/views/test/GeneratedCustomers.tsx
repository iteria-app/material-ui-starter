import GeneratedTable from './GeneratedCustomersTable'
import { useAllCustomersQuery } from 'src/generated/graphql';

const CustomerListView = () => {
  const [result] = useAllCustomersQuery({})
  const { data, error, fetching } = result;

  return (
    <GeneratedTable customers={fetching ? {} : data.customers} />
  );
};
export default CustomerListView

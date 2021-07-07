import React from 'react'
import { useIntl, FormattedMessage } from "react-intl";
import { GridColParams, DataGrid } from "@material-ui/data-grid";
import { useNavigate } from 'react-router-dom'
import { sortCustomers, unsortCustomers } from './OperationsCustomers'

export default function CustomerTable({ customers, onOrderCustomer, onPageChangeCustomer, page, limit, limitCustomer, onFilterCustomer, totalCustomer }) {
    let navigate = useNavigate();

    const handleSortCustomers = (sort) => {
        console.log(sort?.sortModel, 'sort?.sortModel');
        if (sort?.sortModel?.length > 0) {
            sortCustomers(sort, onOrderCustomer)
        } else {
            unsortCustomers(onOrderCustomer)
        }
    };

    console.log(totalCustomer, 'totalCustomer');

    const handlePage = (page) => {
        console.log(page.page, 'page.page')
        onPageChangeCustomer(page?.page + 1)
    };

    const handlePageSize = (pageSize) => {
        limitCustomer(pageSize?.pageSize)
        console.log(pageSize, 'params');
    }

    const handleFilter = React.useCallback((filter) => {
        // const filterValue = filter?.filterModel?.items[0]?.value
        console.log(filter, 'filter');

        // const filterArr1 = filter?.filterModel?.items
        interface filteredQuery {
            filterCategory?: {}
        }

        const filteredQueryForGraphQl: filteredQuery = {}
        getQueryFromDataGrid(filter, filteredQueryForGraphQl)
        sendFilterQueryToGraphQl(filter, filteredQueryForGraphQl)
        setCurrentPageToOne()

    }, [onFilterCustomer]);

    console.log(customers, 'customers1');

    //TODO date
    const customerListDate = customers.filter((date) => date.createdAt.includes("2021-03-17"))
    // if (customerListDate?.length > 0) {
    //   return customerListDate[0]?.createdAt
    // }
    console.log(customerListDate, 'customerListDate');


    const getQueryFromDataGrid = (filter, filteredQueryForGraphQl) => {
        for (let i = 0; i < queryFromDataGrid(filter).length; i++) {
            const filterCategory = queryFromDataGrid(filter)[i].columnField
            const filterOperator = queryFromDataGrid(filter)[i].operatorValue
            const filterValue = queryFromDataGrid(filter)[i].value
            if (filterOperator === 'contains') {
                filteredQueryForGraphQl[filterCategory] = { _ilike: "%" + filterValue + "%" }
            } else if (filterOperator === 'endsWith') {
                filteredQueryForGraphQl[filterCategory] = { _ilike: "%" + filterValue }
            }
            else if (filterOperator === 'startsWith') {
                filteredQueryForGraphQl[filterCategory] = { _ilike: filterValue + "%" }
            }
            else if (filterOperator === 'equals') {
                filteredQueryForGraphQl[filterCategory] = { _eq: filterValue }
            }
            //TODO date
            else if (filterOperator === 'is') {
                filteredQueryForGraphQl[filterCategory] = { _eq: customerListDate[0]?.createdAt }
            }

            console.log(filteredQueryForGraphQl, 'filteredQueryForGraphQl');
        }
    }

    const queryFromDataGrid = (filter) => {
        return filterModelFromDataGrid(filter)
    }

    const sendFilterQueryToGraphQl = (filter, filteredQueryForGraphQl) => {
        if (filteredValueFromDataGrid(filter)) {
            setFilteredQueryToGraphQl(filteredQueryForGraphQl)
            console.log(filteredValueFromDataGrid(filter), 'filterValue');
        } else {
            setDefaultFilteredQueryToGraphQl()
        }
    }

    const filteredValueFromDataGrid = (filter) => {
        // return filter?.filterModel?.items[0]?.value
        for (let i = 0; i < filterModelFromDataGrid(filter).length; i++) {
            const filteredValue = filterModelFromDataGrid(filter)[i]?.value
            if (filteredValue)
                return filteredValue
        }
    }


    const filterModelFromDataGrid = (filter) => {
        return filter?.filterModel?.items
    }


    const setFilteredQueryToGraphQl = (filteredQueryForGraphQl) => {
        onFilterCustomer(filteredQueryForGraphQl);
    }

    const setDefaultFilteredQueryToGraphQl = () => {
        onFilterCustomer({
            name: {
                _ilike: "%%"
            }
        })
    }

    const setCurrentPageToOne = () => {
        onPageChangeCustomer(1)
    }

    // const

    console.log(page, 'page');

    const intl = useIntl();
    const columns = [
        { field: "avatarUrl", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer" defaultMessage="avatarUrl" />) },
        { field: "createdAt", flex: 1, type: "date", valueFormatter: ({ value }) => intl.formatDate(value), renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer" defaultMessage="createdAt" />) },
        { field: "email", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer" defaultMessage="email" />) },
        { field: "id", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer" defaultMessage="id" />) },
        { field: "name", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer" defaultMessage="name" />) },
    ];
    return (<div style={{ height: "400px", width: "100%" }}><DataGrid onRowClick={() => navigate('/app/generated-customer-detail', { replace: true })} columns={columns} rows={customers}
        sortingMode="server"
        onSortModelChange={handleSortCustomers}
        paginationMode="server"
        onPageChange={handlePage}
        onPageSizeChange={handlePageSize}
        pageSize={limit}
        rowsPerPageOptions={[2, 4, 6]}
        page={page - 1}
        // autoPageSize={true}
        rowCount={totalCustomer}
        filterMode="server"
        onFilterModelChange={handleFilter}
    /></div>);
}
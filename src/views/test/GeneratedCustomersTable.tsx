import React from 'react'
import { useIntl, FormattedMessage } from "react-intl";
import { GridColParams, DataGrid } from "@material-ui/data-grid";
import { useNavigate } from 'react-router-dom'
import { sortCustomers, filterDataGrid } from './OperationsCustomers'

export default function CustomerTable({ customers, onSortCustomers, onPageChangeCustomers, page, limit, limitCustomers, onFilterCustomers, totalCustomers }) {
    let navigate = useNavigate();

    const handleSortCustomers = (sort) => {
        console.log(sort?.sortModel, 'sort?.sortModel');
        sortCustomers(sort, onSortCustomers)
        // if (sort?.sortModel?.length > 0) {
        //     setSortQuery(sort, onSortCustomers)
        // } else {
        //     unsortCustomers(onSortCustomers)
        // }
    };

    console.log(totalCustomers, 'totalCustomers');

    const handlePage = (page) => {
        console.log(page.page, 'page.page')
        onPageChangeCustomers(page?.page + 1)
    };

    const handlePageSize = (pageSize) => {
        limitCustomers(pageSize?.pageSize)
        console.log(pageSize, 'params');
    }

    const handleFilter = React.useCallback((filter) => {
        console.log(filter, 'filter');
        filterDataGrid(filter, onFilterCustomers, onPageChangeCustomers)
    }, [onFilterCustomers, onPageChangeCustomers]);

    console.log(customers, 'customers1');

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
        rowCount={totalCustomers}
        filterMode="server"
        onFilterModelChange={handleFilter}
    /></div>);
}
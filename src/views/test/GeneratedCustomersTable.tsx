import React from 'react'
import { useIntl, FormattedMessage } from "react-intl";
import { GridColParams, DataGrid } from "@material-ui/data-grid";
import { useNavigate } from 'react-router-dom'
import { sortCustomers, filterDataGrid, pageByTotalAndPageSize } from './OperationsCustomers'

export default function CustomerTable({ customers, onSortCustomers, onChangePageCustomers, page, offset, limit, onPageSize, onFilterCustomers, totalCustomers }) {
    let navigate = useNavigate();

    const handleSortCustomers = (sort) => {
        console.log(sort?.sortModel, 'sort?.sortModel');
        sortCustomers(sort, onSortCustomers)
    };

    console.log(totalCustomers, 'totalCustomers');

    const handlePage = (page) => {
        console.log(page.page, 'page.page')
        const pageNumber = page?.page
        onChangePageCustomers(pageNumber + 1)
    };

    const handlePageSize = (pageSize) => {
        const pageSizeNumber = pageSize?.pageSize
        const pageSizeWithOffset = (pageSizeNumber + offset) + 1
        if (pageSizeWithOffset > totalCustomers) {
            onChangePageCustomers(pageByTotalAndPageSize(pageSizeNumber, totalCustomers))
        }
        console.log(pageSize, 'pageSize');
        onChangePageCustomers(1)

        onPageSize(pageSizeNumber)

        console.log(pageSize, 'params');
    }

    const handleFilter = React.useCallback((filter) => {
        console.log(filter, 'filter');
        filterDataGrid(filter, onFilterCustomers, onChangePageCustomers)
    }, [onFilterCustomers, onChangePageCustomers]);

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
        page={page - 1}
        // autoPageSize={true}
        rowsPerPageOptions={[2, 4, 6]}
        rowCount={totalCustomers}
        filterMode="server"
        onFilterModelChange={handleFilter}
    /></div>);
}
import React from 'react'
import { useIntl, FormattedMessage } from "react-intl";
import { GridCellParams, DataGrid } from "@material-ui/data-grid";
import { useNavigate } from 'react-router-dom'
import { sortCustomers } from './operations/sort'
import { pageByTotalAndPageSize } from './operations/pagination'
import { filterDataGrid, getFilterData, numberColumnType, uuidColumnType } from './operations/filter'

export default function CustomerTable({ customers, onSortCustomers, onChangePageCustomers, page, offset, pageSize, onPageSize, onFilterCustomers, totalCustomers }) {
    let navigate = useNavigate();

    const handleSortCustomers = (sort) => {
        console.log(sort?.sortModel, 'sort?.sortModel');
        sortCustomers(sort, onSortCustomers)
    };

    console.log(totalCustomers, 'totalCustomers');

    const handlePage = (page) => {
        console.log(page.page, 'page.page')
        const pageNumber = page?.page
        onChangePageCustomers(pageNumber)
    };

    const handlePageSize = (pageSize) => {
        const pageSizeNumber = pageSize?.pageSize
        const pageSizeWithOffset = (pageSizeNumber + offset)
        console.log(pageSizeNumber, offset, 'pageSizeNumber, offset');
        if (pageSizeWithOffset > totalCustomers) {
            onChangePageCustomers(pageByTotalAndPageSize(pageSizeNumber, totalCustomers))
        }
        onPageSize(pageSizeNumber)
        console.log(pageSize, 'params');
    }

    const handleFilter = React.useCallback((filter) => {
        console.log(filter, 'filter');
        getFilterData(filter)
        filterDataGrid(onFilterCustomers, onChangePageCustomers)
    }, [onFilterCustomers, onChangePageCustomers]);

    console.log(customers, 'customers1');

    console.log(page, 'page');

    const intl = useIntl();
    const columns = [
        { field: "createdAt", headerName: 'timeStamp', width: 150, type: "date", valueFormatter: ({ value }) => intl.formatDate(value), renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="timeStamp" />) },

        //TODO fix daylight saving time
        // { field: "timeStamp2", width: 150, type: "dateTime", valueFormatter: ({ value }) => intl.formatDate(value) + ", " + intl.formatTime(value), renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="timeStamp2" />) },
        { field: "timeStamp2", width: 150, type: "dateTime", valueFormatter: ({ value }) => intl.formatDate(value) + ", " + intl.formatTime(value, { timeZone: 'Europe/Athens' }), renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="timeStamp2" />) },
        // { field: "timeStamp2", width:150, type: "dateTime", valueFormatter: ({ value }) => intl.formatDate(value) + ", " + intl.formatTime(value,{timeZone: 'Europe/Bratislava'}), renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="timeStamp2" />) },
        
        { field: "timeStampZ", width: 150, type: "dateTime", valueFormatter: ({ value }) => intl.formatDate(value) + ", " + intl.formatTime(value), renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="timeStampZ" />) },
        { field: "id", width: 150, type: "string", filterOperators: uuidColumnType(), valueFormatter: ({ value }) => value, renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="id" />) },
        { field: "seq", headerName: 'int', width: 80, filterOperators: numberColumnType, type: "number", valueFormatter: ({ value }) => value, renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="int" />) },
        { field: "name", width: 150, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="name" />) },
        { field: "manager", width: 80, type: "boolean", valueFormatter: ({ value }) => value, renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customers" defaultMessage="manager" />) },
        { field: "bigInteger", width: 150, filterOperators: numberColumnType, type: "number", valueFormatter: ({ value }) => value, renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customers" defaultMessage="bigInteger" />) },
        { field: "date", width: 150, type: "date", valueFormatter: ({ value }) => value, renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customers" defaultMessage="date" />) },
        { field: "float", width: 80, type: "number", valueFormatter: ({ value }) => value, renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customers" defaultMessage="float" />) },
        { field: "jsonB", width: 120, type: "string", filterable: false, valueFormatter: ({ value }) => JSON.stringify(value), renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customers" defaultMessage="jsonB" />) },
        { field: "time", width: 150, type: "dateTime", valueFormatter: ({ value }) => value, renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customers" defaultMessage="time" />) },
        { field: "timeZ", width: 150, type: "dateTime", valueFormatter: ({ value }) => value, renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customers" defaultMessage="timeZ" />) },
        {
            field: "state", width: 100, type: "singleSelect",
            valueOptions: [
                'California',
                'Netherlands',
                'France',
                'Georgia',
                'Texas',
                'Utah',
            ],
            valueFormatter: ({ value }) => value,
            renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customers" defaultMessage="state" />)
        }
    ];
    return (<div style={{ height: "400px", width: "100%" }}><DataGrid onRowClick={() => navigate('/app/generated-customer-detail', { replace: true })} columns={columns} rows={customers}
        sortingMode="server"
        onSortModelChange={handleSortCustomers}
        paginationMode="server"
        onPageChange={handlePage}
        onPageSizeChange={handlePageSize}
        pageSize={pageSize}
        page={page}
        // autoPageSize={true}
        rowsPerPageOptions={[2, 3, 4, 5, 6, 20]}
        rowCount={totalCustomers}
        filterMode="server"
        onFilterModelChange={handleFilter}
    /></div>);
}
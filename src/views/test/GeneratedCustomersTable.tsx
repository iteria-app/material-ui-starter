import React from 'react'
import { useIntl, FormattedMessage } from "react-intl";
import { GridCellParams, DataGrid, GridColTypeDef, getGridStringOperators, getGridNumericColumnOperators } from "@material-ui/data-grid";
import TextField from '@material-ui/core/TextField';
import { useNavigate } from 'react-router-dom'
import { sortCustomers, filterDataGrid, pageByTotalAndPageSize, getFilterData } from './OperationsCustomers'


export default function CustomerTable({ customers, onSortCustomers, onChangePageCustomers, page, offset, pageSize, onPageSize, onFilterCustomers, totalCustomers }) {
    let navigate = useNavigate();

    const handleSortCustomers = (sort) => {
        console.log(sort?.sortModel, 'sort?.sortModel');
        sortCustomers(sort, onSortCustomers, customers)
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
        //TODO toto osetruje ked mi presiahne paginaciu po onPageSizeChange. Malo by to robit material ui
        if (pageSizeWithOffset > totalCustomers) {
            onChangePageCustomers(pageByTotalAndPageSize(pageSizeNumber, totalCustomers))
        }
        onPageSize(pageSizeNumber)
        console.log(pageSize, 'params');
    }

    const InputCustom = (props) => {
        const { item, applyValue } = props;
        const handleFilterChange = (event) => {
            const inputTargetValue = event.target.value.replace(/[^0-9]/g, '')
            applyValue({ ...item, value: inputTargetValue })
        }
        
        const maxLength = () =>{
            const columnField = columnFieldValue()
            if(columnField === 'bigInteger'){
                return 19
            }
            return 9
        }

        const columnFieldValue = () => {
            return item?.columnField
        }
        
        return (
            <TextField
                label='Number'
                type='tel'
                value={item?.value || ''}
                inputProps={{ maxLength: maxLength() }}
                onChange={handleFilterChange}
            />
        )
    };

    const handleFilter = React.useCallback((filter) => {
        console.log(filter, 'filter');
        getFilterData(filter)
        filterDataGrid(onFilterCustomers, onChangePageCustomers)
    }, [onFilterCustomers, onChangePageCustomers]);

    console.log(customers, 'customers1');

    console.log(page, 'page');

    const uuidColumnType: GridColTypeDef = {
        extendType: 'string',
        filterOperators: getGridStringOperators()
            .filter((operator) => operator.value === 'equals')
            .map((operator) => {
                return {
                    ...operator
                };
            }),
    };

    const numberColumnType = getGridNumericColumnOperators().map(
        (operator) => ({
            ...operator,
            InputComponent: InputCustom,
        }),
    );

    const intl = useIntl();
    const columns = [
        { field: "createdAt", width: 150, type: "date", valueFormatter: ({ value }) => intl.formatDate(value), renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="timeStampDate" />) },

        //TODO fix timezone
        { field: "dateTime", width: 150, type: "dateTime", valueFormatter: ({ value }) => intl.formatDate(value) + ", " + intl.formatTime(value), renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="timeStamp" />) },
        // { field: "dateTime", width:150, type: "dateTime", valueFormatter: ({ value }) => intl.formatDate(value) + ", " + intl.formatTime(value,{timeZone: 'Europe/Athens'}), renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="dateTime" />) },
        // { field: "dateTime", width:150, type: "dateTime", valueFormatter: ({ value }) => intl.formatDate(value) + ", " + intl.formatTime(value,{timeZone: 'Europe/Bratislava'}), renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="dateTime" />) },
        { field: "timeStampZ", width: 150, type: "dateTime", valueFormatter: ({ value }) => intl.formatDate(value) + ", " + intl.formatTime(value), renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="timeStampZ" />) },
        { field: "id", width: 150, type: "string", filterOperators: uuidColumnType.filterOperators, valueFormatter: ({ value }) => value, renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="id" />) },
        { field: "seq", width: 80, filterOperators: numberColumnType, type: "number", valueFormatter: ({ value }) => value, renderHeader: (params: GridCellParams) => (<FormattedMessage id="Customer" defaultMessage="seq" />) },
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
        //TODO numbers for testing
        rowsPerPageOptions={[2, 3, 4, 5, 6, 20]}
        rowCount={totalCustomers}
        filterMode="server"
        onFilterModelChange={handleFilter}
    /></div>);
}
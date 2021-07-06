import React from 'react'
import { useIntl, FormattedMessage } from "react-intl";
import { GridColParams, DataGrid } from "@material-ui/data-grid";
import { useNavigate } from 'react-router-dom'
import { sortCustomers, unsortCustomers} from './OperationsCustomers'

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

    console.log(totalCustomer,'totalCustomer'); 

    const handlePage = (page) => {
        console.log(page.page, 'page.page')
        onPageChangeCustomer(page?.page + 1)
    };

    const handlePageSize = (pageSize) => {
        limitCustomer(pageSize?.pageSize)
        console.log(pageSize,'params'); 
    }

    const handleFilter = React.useCallback((filter) => {
        // const filterValue = filter?.filterModel?.items[0]?.value
        console.log(filter,'filter'); 
        
        // const filterArr1 = filter?.filterModel?.items
        interface filterArr {
            filterCategory?: {}
        } 
        const filteredArrForGraphQl: filterArr  = {}

        for (let i = 0; i < filteredArrayFromUi(filter).length; i++)   {
            const filterCategory = filteredArrayFromUi(filter)[i].columnField
            const filterOperator = filteredArrayFromUi(filter)[i].operatorValue
            const filterValue = filteredArrayFromUi(filter)[i].value

            if(filterOperator === 'contains'){
                filteredArrForGraphQl[filterCategory] = {_ilike: "%" + filterValue + "%"}
            }else if(filterOperator === 'endsWith'){
                filteredArrForGraphQl[filterCategory] = {_ilike: "%" + filterValue}
            }
            else if(filterOperator === 'startsWith'){
                filteredArrForGraphQl[filterCategory] = {_ilike: filterValue + "%"}
            }
            else if(filterOperator === 'equals'){
                filteredArrForGraphQl[filterCategory] = {_eq: filterValue}
            }
    
            console.log(filteredArrForGraphQl,'filteredArrForGraphQl'); 
        }

        if (filteredValueFromUi(filter)) {
            onFilterCustomer(filteredArrForGraphQl);
            onPageChangeCustomer(1)
            console.log(filteredValueFromUi(filter), 'filterValue');
        } else {
            onFilterCustomer({
                name: {
                    _ilike: "%%"
                }
              })
            onPageChangeCustomer(1)
        }
    }, [onFilterCustomer]);

    const filteredValueFromUi = (filter) => {
        return filter?.filterModel?.items[0]?.value
    }

    const filteredArrayFromUi = (filter) => {
        return filter?.filterModel?.items
    }

    console.log(page,'page'); 

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
        rowsPerPageOptions={[2,4,6]}
        page={page - 1}
        // autoPageSize={true}
        rowCount={totalCustomer}
        filterMode="server"
        onFilterModelChange={handleFilter}
    /></div>);
}
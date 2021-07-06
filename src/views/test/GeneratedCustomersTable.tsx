import React from 'react'
import { useIntl, FormattedMessage } from "react-intl";
import { GridColParams, DataGrid } from "@material-ui/data-grid";
import { useNavigate } from 'react-router-dom'
import { sortCustomers, unsortCustomers} from './OperationsCustomers'

export default function CustomerTable({ customers, onOrderCustomer, onPageChangeCustomer, limit, limitCustomer, onFilterCustomer, totalCustomer }) {
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
        onPageChangeCustomer(page.page + 1)
    };

    const handlePageSize = (pageSize) => {
        limitCustomer(pageSize?.pageSize)
        console.log(pageSize,'params'); 
    }

    const handleFilter = React.useCallback((filter) => {
        // const filterValue = filter?.filterModel?.items[0]?.value
        filterValue(filter)

        console.log(filter,'filter'); 
        
        const filterArr1 = filter?.filterModel?.items
        interface filterArr {
            filterCategory?: {}
        } 
        const arrTest: filterArr  = {}

        for (let i = 0; i < filterArr1.length; i++)   {
            const filterCategory = filterArr1[i].columnField
            const filterOperator = filterArr1[i].operatorValue
            const filterValue = filterArr1[i].value

            if(filterOperator === 'contains'){
                arrTest[filterCategory] = {_ilike: "%" + filterValue + "%"}
            }else if(filterOperator === 'endsWith'){
                arrTest[filterCategory] = {_ilike: "%" + filterValue}
            }
            else if(filterOperator === 'startsWith'){
                arrTest[filterCategory] = {_ilike: filterValue + "%"}
            }
            else if(filterOperator === 'equals'){
                arrTest[filterCategory] = {_eq: filterValue}
            }
    
            console.log(arrTest,'arrTest'); 
        }

        if (filterValue(filter)) {
            onFilterCustomer(arrTest);
            console.log(filterValue(filter), 'filterValue');
        } else {
            onFilterCustomer({
                name: {
                    _ilike: "%%"
                }
              })
        }
    }, [onFilterCustomer]);

    const filterValue = (filter) => {
        return filter?.filterModel?.items[0]?.value
    }

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
        rowCount={totalCustomer}
        filterMode="server"
        onFilterModelChange={handleFilter}
    /></div>);
}
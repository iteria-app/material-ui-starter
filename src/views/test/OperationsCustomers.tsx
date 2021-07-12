export const sortCustomers = (sort, onSortCustomers) => {
    const sortModel: object[] = sortModelFromDataGrid(sort)
    if (sortModel.length > 0) {
        setSortQuery(sort, onSortCustomers)
    } else {
        unsortCustomers(onSortCustomers)
    }
}

const setSortQuery = (sort, onSortCustomers) => {
    onSortCustomers(sortQueryFromGridData(sort))
}

const sortQueryFromGridData = (sort): object => {
    const sortQuery: object = {}
    const sortModels = sortModelFromDataGrid(sort)
    sortModels.forEach(sortModel => {
        const sortColumnFiled: string = sortModel?.field
        const sortValue: string = sortModel?.sort
        sortQuery[sortColumnFiled] = sortValue
    })
    return sortQuery
}

const unsortCustomers = (onSortCustomers) => {
    onSortCustomers({
        "name": "asc"
    })
}

const sortModelFromDataGrid = (sort) => {
    const sortModel = sort?.sortModel
    if (sortModel)
        return sortModel
    return {}
}

//TODO date
// export const customerListDate = (customers) => {
//     const customerListDate = customers.filter((date) => date.createdAt.includes("2021-03-17"))
//     console.log(customerListDate,'customers'); 
//     if (customerListDate?.length > 0) {
//       return customerListDate[0]?.createdAt
//     }
// } 
// console.log(customerListDate, 'customerListDate');

export const pageByTotalAndPageSize = (pageSizeNumber: number, totalCustomers: number): number => {
    const pageNumber: number = Math.floor((totalCustomers / pageSizeNumber) - 1)
    console.log(pageNumber,'pageNumber'); 
    if ((pageNumber) <= 0) {
        return 0
    }
    return pageNumber
}

export const filterDataGrid = (filter, onFilterCustomers, onChangePageCustomers) => {
    const filteredQueryForGraphQl = getQueryFromDataGrid(filter)
    sendFilterQueryToGraphQl(filter, filteredQueryForGraphQl, onFilterCustomers)
    setCurrentPageToOne(onChangePageCustomers)
}

const getQueryFromDataGrid = (filter) => {
    const filteredQueryForGraphQl: object = {}
    const filterModels = filterModelFromDataGrid(filter)

    filterModels.forEach(filterModel => {
        const filterColumnField: string = getFilterColumnField (filterModel)
        const filterOperator: string = filterModel.operatorValue
        const filterValue: string = filterModel.value

        
        console.log(filterColumnField,'filterColumnField'); 
        
        // for (const column of filter.columns[0].type) {
        //     console.log(column);
        // }
        const columnFilterField = filter.columns.filter((kv) => kv.field === filterColumnField)
        const columnDateType = columnFilterField[0].type
        // console.log(columnFilterField,'columnFilterType'); 
        console.log(columnDateType,'columnDateType'); 

        console.log(filterModel,'filterModel1'); 
        console.log(filterValue,'filterValue2'); 
        console.log(filteredQueryForGraphQl, 'filteredQueryForGraphQl');

        if (filterOperator === 'contains') {
            filteredQueryForGraphQl[filterColumnField] = { _ilike: "%" + filterValue + "%" }
            console.log(filteredQueryForGraphQl, 'filteredQueryForGraphQl');
        } else if (filterOperator === 'endsWith') {
            filteredQueryForGraphQl[filterColumnField] = { _ilike: "%" + filterValue }
            // filterEndsWith(filteredQueryForGraphQl, filterColumnField, filterValue)
        }
        else if (filterOperator === 'startsWith') {
            filteredQueryForGraphQl[filterColumnField] = { _ilike: filterValue + "%" }
        }
        else if (filterOperator === 'equals') {
            filteredQueryForGraphQl[filterColumnField] = { _eq: filterValue }
        }
        else if (filterOperator === 'before') {
            if(columnDateType === 'dateTime'){
                console.log(columnDateType, 'columnDateType'); 
                filteredQueryForGraphQl[filterColumnField] = { _lt: filterValue}
            }else if(columnDateType === 'date'){
                filteredQueryForGraphQl[filterColumnField] = { _lt: filterValue + "T00:00:00"}
            }
        }
        else if (filterOperator === 'after') {
            if(columnDateType === 'dateTime'){
                console.log(columnDateType,'columnDateType'); 
                filteredQueryForGraphQl[filterColumnField] = { _gt: filterValue}
            }else if(columnDateType === 'date'){
                filteredQueryForGraphQl[filterColumnField] = { _gt: filterValue  + "T23:59:59"}
            }
        }
        else if (filterOperator === 'onOrBefore') {
            if(columnDateType === 'dateTime'){
                console.log(columnDateType,'columnDateType'); 
                filteredQueryForGraphQl[filterColumnField] = { _lte: filterValue}
            }else if(columnDateType === 'date'){
                filteredQueryForGraphQl[filterColumnField] = { _lte: filterValue + "T23:59:59" }
            }
        }
        else if (filterOperator === 'onOrAfter') {
            if(columnDateType === 'dateTime'){
                console.log(columnDateType,'columnDateType'); 
                filteredQueryForGraphQl[filterColumnField] = { _gte: filterValue}
            }else if(columnDateType === 'date'){
                filteredQueryForGraphQl[filterColumnField] = { _gte: filterValue + "T00:00:00"}
            }
        }
    })

    return filteredQueryForGraphQl
}

const getDateType = () => {

}

const getFilterColumnField = (filterModel) => {
    return filterModel.columnField
}

const sendFilterQueryToGraphQl = (filter, filteredQueryForGraphQl, onFilterCustomers) => {
    const filteredValue: string = filteredValueFromDataGrid(filter)
    if (filteredValue) {
        setFilteredQueryToGraphQl(filteredQueryForGraphQl, onFilterCustomers)
    } else {
        setDefaultFilteredQueryToGraphQl(onFilterCustomers)
    }
}

const filteredValueFromDataGrid = (filter) => {
    const filterModel = filterModelFromDataGrid(filter)
    for (let i = 0; i < filterModel.length; i++) {
        const filteredValue: string = filterModel[i]?.value
        if (filteredValue)
            return filteredValue
    }
    return ""
}

const filterModelFromDataGrid = (filter) => {
    const filteredModel: object = filter?.filterModel?.items
    if (filteredModel)
        return filter?.filterModel?.items
    return {}
}

const setFilteredQueryToGraphQl = (filteredQueryForGraphQl, onFilterCustomers) => {
    onFilterCustomers(filteredQueryForGraphQl);
}

const setDefaultFilteredQueryToGraphQl = (onFilterCustomers) => {
    onFilterCustomers({
        name: {
            _ilike: "%%"
        }
    })
}

export const setCurrentPageToOne = (onChangePageCustomers) => {
    onChangePageCustomers(0)
}
export const sortCustomers = (sort, onSortCustomers) => {
    const sortModel = sortModelFromDataGrid(sort)
    if (sortModel.length > 0) {
        setSortQuery(sort, onSortCustomers)
    } else {
        unsortCustomers(onSortCustomers)
    }
}

const setSortQuery = (sort, onSortCustomers) => {
    onSortCustomers(sortQueryFromGridData(sort))
}

const sortQueryFromGridData = (sort) =>{
    const sortQuery = {} 
    const sortModels = sortModelFromDataGrid(sort)
    sortModels.forEach(sortModel => {
        const sortColumnFiled = sortModel?.field
        const sortValue = sortModel?.sort
        sortQuery[sortColumnFiled] = sortValue
      })
    return sortQuery
}

const unsortCustomers = (onSortCustomers) => {
    onSortCustomers({
        "name": "asc"
    })
}

const sortModelFromDataGrid = (sort) =>{
    return sort?.sortModel
}

//TODO date
// const customerListDate = (customers) => {
//     customers.filter((date) => date.createdAt.includes("2021-03-17"))
// } 
// if (customerListDate?.length > 0) {
//   return customerListDate[0]?.createdAt
// }
// console.log(customerListDate, 'customerListDate');
// interface filteredQuery {
//     filterColumnField?: {}
// }

export const pageByTotalAndPageSize = (pageSizeNumber, totalCustomers) => {
    const pageNumber = Math.floor(totalCustomers / pageSizeNumber)
    if((pageNumber) > 0){
        return pageNumber
    }
    return 1
}

export const filterDataGrid = (filter, onFilterCustomers, onChangePageCustomers) => {
    const filteredQueryForGraphQl = getQueryFromDataGrid(filter)
    sendFilterQueryToGraphQl(filter, filteredQueryForGraphQl, onFilterCustomers)
    setCurrentPageToOne(onChangePageCustomers)
}

const getQueryFromDataGrid = (filter) => {    
    const filteredQueryForGraphQl = {}
    const filterModels = filterModelFromDataGrid(filter)

    filterModels.forEach(filterModel => {
        const filterColumnField = filterModel.columnField
        const filterOperator = filterModel.operatorValue
        const filterValue = filterModel.value
        if (filterOperator === 'contains') {
            filteredQueryForGraphQl[filterColumnField] = { _ilike: "%" + filterValue + "%" }
            console.log(filteredQueryForGraphQl,'filteredQueryForGraphQl'); 
            // filterContains(filteredQueryForGraphQl, filterColumnField, filterValue)
        } else if (filterOperator === 'endsWith') {
            filteredQueryForGraphQl[filterColumnField] = { _ilike: "%" + filterValue }
            // filterEndsWith(filteredQueryForGraphQl, filterColumnField, filterValue)
        }
        else if (filterOperator === 'startsWith') {
            filteredQueryForGraphQl[filterColumnField] = { _ilike: filterValue + "%" }
            // filterStartsWith(filteredQueryForGraphQl, filterColumnField, filterValue)

        }
        else if (filterOperator === 'equals') {
            filteredQueryForGraphQl[filterColumnField] = { _eq: filterValue }
            // filterEquals(filteredQueryForGraphQl, filterColumnField, filterValue)
        }
        //TODO date
        // else if (filterOperator === 'is') {
        //     filteredQueryForGraphQl[filterCategory] = { _eq: customerListDate[0]?.createdAt }
        // }
        // filteredQueryForGraphQl(filterOperator, filterColumnField, filterValue)

        console.log(filteredQueryForGraphQl, 'filteredQueryForGraphQl');
      })

    return filteredQueryForGraphQl
}

//spravit navratovu funkciu
// const filterContains = (filteredQueryForGraphQl, filterColumnField, filterValue) => {
//     filteredQueryForGraphQl[filterColumnField] = { _ilike: "%" + filterValue + "%" }
// }
// const filterEndsWith = (filteredQueryForGraphQl, filterColumnField, filterValue) => {
//     filteredQueryForGraphQl[filterColumnField] = { _ilike: "%" + filterValue }
// }
// const filterStartsWith = (filteredQueryForGraphQl, filterColumnField, filterValue) => {
//     filteredQueryForGraphQl[filterColumnField] = { _ilike: filterValue + "%" }
// }
// const filterEquals = (filteredQueryForGraphQl, filterColumnField, filterValue) => {
//     filteredQueryForGraphQl[filterColumnField] = { _eq: filterValue }
// }

const sendFilterQueryToGraphQl = (filter, filteredQueryForGraphQl, onFilterCustomers) => {
    if (filteredValueFromDataGrid(filter)) {
        setFilteredQueryToGraphQl(filteredQueryForGraphQl, onFilterCustomers)
        console.log(filteredValueFromDataGrid(filter), 'filterValue');
    } else {
        setDefaultFilteredQueryToGraphQl(onFilterCustomers)
    }
}

const filteredValueFromDataGrid = (filter) => {
    const filterModel = filterModelFromDataGrid(filter)
    for (let i = 0; i < filterModel.length; i++) {
        const filteredValue = filterModel[i]?.value
        if (filteredValue)
            return filteredValue
    }
}

const filterModelFromDataGrid = (filter) => {
    return filter?.filterModel?.items
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
    onChangePageCustomers(1)
}
export const sortCustomers = (sort, onSortCustomers) => {
    if (sortModelFromDataGrid(sort) > 0) {
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
    const sortModel = sortModelFromDataGrid(sort)
    for (let i = 0; i < sortModel.length; i++) {
        const sortColumnFiled = sortModel[i]?.field
        const sortValue = sortModel[i]?.sort
        sortQuery[sortColumnFiled] = sortValue
    }
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

export const filterDataGrid = (filter, onFilterCustomers, onPageChangeCustomers) => {
    sendFilterQueryToGraphQl(filter, getQueryFromDataGrid(filter), onFilterCustomers)
    setCurrentPageToOne(onPageChangeCustomers)
}

const getQueryFromDataGrid = (filter) => {    
    const filteredQueryForGraphQl = {}
    for (let i = 0; i < queryFromDataGrid(filter).length; i++) {
        const filterColumnField = queryFromDataGrid(filter)[i].columnField
        const filterOperator = queryFromDataGrid(filter)[i].operatorValue
        const filterValue = queryFromDataGrid(filter)[i].value
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
    }
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

const queryFromDataGrid = (filter) => {
    return filterModelFromDataGrid(filter)
}

const sendFilterQueryToGraphQl = (filter, filteredQueryForGraphQl, onFilterCustomers) => {
    if (filteredValueFromDataGrid(filter)) {
        setFilteredQueryToGraphQl(filteredQueryForGraphQl, onFilterCustomers)
        console.log(filteredValueFromDataGrid(filter), 'filterValue');
    } else {
        setDefaultFilteredQueryToGraphQl(onFilterCustomers)
    }
}

const filteredValueFromDataGrid = (filter) => {
    for (let i = 0; i < filterModelFromDataGrid(filter).length; i++) {
        const filteredValue = filterModelFromDataGrid(filter)[i]?.value
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

const setCurrentPageToOne = (onPageChangeCustomers) => {
    onPageChangeCustomers(1)
}
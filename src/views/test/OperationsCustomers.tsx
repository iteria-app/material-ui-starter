export const sortCustomers = (sort, onSortCustomers) => {
    if (sort?.sortModel?.length > 0) {
        setSortQuery(sort, onSortCustomers)
    } else {
        unsortCustomers(onSortCustomers)
    }
}

const setSortQuery = (params, onSortCustomers) => {
    //TODO any
    const result: any = Object.values(params?.sortModel[0])
    const ob = {}
    while (result.length) {
        ob[result.shift()] = result.shift();
    }
    onSortCustomers(ob)
}

const unsortCustomers = (onSortCustomers) => {
    onSortCustomers({
        "name": "asc"
    })
}

//TODO date
// const customerListDate = (customers) => {
//     customers.filter((date) => date.createdAt.includes("2021-03-17"))
// } 
// if (customerListDate?.length > 0) {
//   return customerListDate[0]?.createdAt
// }
// console.log(customerListDate, 'customerListDate');
interface filteredQuery {
    filterCategory?: {}
}

export const filterDataGrid = (filter, onFilterCustomers, onPageChangeCustomers) => {
    const filteredQueryForGraphQl: filteredQuery = {}
    getQueryFromDataGrid(filter, filteredQueryForGraphQl)
    sendFilterQueryToGraphQl(filter, filteredQueryForGraphQl, onFilterCustomers)
    setCurrentPageToOne(onPageChangeCustomers)
}

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
        // else if (filterOperator === 'is') {
        //     filteredQueryForGraphQl[filterCategory] = { _eq: customerListDate[0]?.createdAt }
        // }

        console.log(filteredQueryForGraphQl, 'filteredQueryForGraphQl');
    }
}

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
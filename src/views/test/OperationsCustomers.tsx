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

export const pageByTotalAndPageSize = (pageSizeNumber: number, totalCustomers: number): number => {
    const pageNumber: number = Math.floor((totalCustomers / pageSizeNumber) - 1)
    console.log(pageNumber, 'pageNumber');
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

const sendFilterQueryToGraphQl = (filter, filteredQueryForGraphQl, onFilterCustomers) => {
    const filteredValue: string = filteredValueFromDataGrid(filter)
    if (filteredValue) {
        setFilteredQueryToGraphQl(filteredQueryForGraphQl, onFilterCustomers)
    } else {
        setDefaultFilteredQueryToGraphQl(onFilterCustomers)
    }
}

const getQueryFromDataGrid = (filter) => {
    const filteredQueryForGraphQl: object = {}
    const filterModels = filterModelFromDataGrid(filter)

    filterModels.forEach(filterModel => {
        const filterColumnField: string = getFilterColumnField(filterModel)
        const filterOperator: string = filterModel.operatorValue
        const filterValue: string = filterModel.value

        console.log(filterColumnField, 'filterColumnField');

        const filterDateColumn = getFilterDateColumn(filter, filterColumnField)
        const filterDataType = filterDateColumn[0].type
        console.log(filterDataType, 'filterDataType');

        console.log(filterModel, 'filterModel1');
        console.log(filterValue, 'filterValue2');
        console.log(filteredQueryForGraphQl, 'filteredQueryForGraphQl');

        //TODO refaktoring
        if (filterDataType === 'string') {
            filterText(filterOperator, filteredQueryForGraphQl, filterColumnField, filterValue)
        }
        //TODO refaktoring
        else if (filterDataType === 'number') {
            filterNumber(filterOperator, filteredQueryForGraphQl, filterColumnField, filterValue)
        }
        filterDate(filterOperator, filterDataType, filteredQueryForGraphQl, filterColumnField, filterValue)
    })

    return filteredQueryForGraphQl
}

// const filter1 = (filteredQueryForGraphQl, filterColumnField, filterValue) => {
//     filteredQueryForGraphQl[filterColumnField] = { _ilike: "%" + filterValue + "%" }
// }

//TODO refaktoring
const filterText = (filterOperator, filteredQueryForGraphQl, filterColumnField, filterValue) => {
    if (filterOperator === 'contains') {
        filteredQueryForGraphQl[filterColumnField] = { _ilike: "%" + filterValue + "%" }
    }
    else if (filterOperator === 'endsWith') {
        filteredQueryForGraphQl[filterColumnField] = { _ilike: "%" + filterValue }
    }
    else if (filterOperator === 'startsWith') {
        filteredQueryForGraphQl[filterColumnField] = { _ilike: filterValue + "%" }
    }
    else if (filterOperator === 'equals') {
        filteredQueryForGraphQl[filterColumnField] = { _eq: filterValue }
    }
}

//TODO refaktoring
const filterNumber = (filterOperator, filteredQueryForGraphQl, filterColumnField, filterValue) => {
    if (filterOperator === '=') {
        filteredQueryForGraphQl[filterColumnField] = { _eq: filterValue }
    }
    else if (filterOperator === '!=') {
        filteredQueryForGraphQl[filterColumnField] = { _neq: filterValue }
    }
    else if (filterOperator === '>') {
        filteredQueryForGraphQl[filterColumnField] = { _gt: filterValue }
    }
    else if (filterOperator === '<') {
        filteredQueryForGraphQl[filterColumnField] = { _lt: filterValue }
    }
    else if (filterOperator === '>=') {
        filteredQueryForGraphQl[filterColumnField] = { _gte: filterValue }
    }
    else if (filterOperator === '<=') {
        filteredQueryForGraphQl[filterColumnField] = { _lte: filterValue }
    }
}

//TODO refaktoring
const filterDate = (filterOperator, filterDataType, filteredQueryForGraphQl, filterColumnField, filterValue) => {
    if (filterOperator === 'before') {
        if (filterDataType === 'dateTime') {
            filteredQueryForGraphQl[filterColumnField] = { _lt: filterValue }
        } else if (filterDataType === 'date') {
            filteredQueryForGraphQl[filterColumnField] = { _lt: filterValue + "T00:00:00" }
        }
    }
    else if (filterOperator === 'after') {
        if (filterDataType === 'dateTime') {
            filteredQueryForGraphQl[filterColumnField] = { _gt: filterValue }
        } else if (filterDataType === 'date') {
            filteredQueryForGraphQl[filterColumnField] = { _gt: filterValue + "T23:59:59" }
        }
    }
    else if (filterOperator === 'onOrBefore') {
        if (filterDataType === 'dateTime') {
            filteredQueryForGraphQl[filterColumnField] = { _lte: filterValue }
        } else if (filterDataType === 'date') {
            filteredQueryForGraphQl[filterColumnField] = { _lte: filterValue + "T23:59:59" }
        }
    }
    else if (filterOperator === 'onOrAfter') {
        if (filterDataType === 'dateTime') {
            filteredQueryForGraphQl[filterColumnField] = { _gte: filterValue }
        } else if (filterDataType === 'date') {
            filteredQueryForGraphQl[filterColumnField] = { _gte: filterValue + "T00:00:00" }
        }
    }
}

const getFilterColumnField = (filterModel) => {
    return filterModel.columnField
}

const getFilterDateColumn = (filter, filterColumnField) => {
    return filter.columns.filter((column) => column.field === filterColumnField)
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
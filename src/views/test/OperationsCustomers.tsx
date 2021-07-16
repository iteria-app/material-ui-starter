import { getGridStringOperators } from "@material-ui/data-grid";

const getNumberFilterOperator = (filterValue) => {
    const operatorValues = [
        {
            dataGrid: '=',
            graphQl: { _eq: filterValue }
        },
        {
            dataGrid: '!=',
            graphQl: { _neq: filterValue }
        },
        {
            dataGrid: '>',
            graphQl: { _gt: filterValue }
        },
        {
            dataGrid: '<',
            graphQl: { _lt: filterValue }
        },
        {
            dataGrid: '>=',
            graphQl: { _gte: filterValue }
        },
        {
            dataGrid: '<=',
            graphQl: { _lte: filterValue }
        }
    ]
    return operatorValues
}

const getStringFilterOperator = (filterValue) => {
    const operatorValues = [
        {
            dataGrid: 'contains',
            graphQl: { _ilike: "%" + filterValue + "%" }
        },
        {
            dataGrid: 'equals',
            graphQl: { _eq: filterValue }
        },
        {
            dataGrid: 'startsWith',
            graphQl: { _ilike: filterValue + "%" }
        },
        {
            dataGrid: 'endsWith',
            graphQl: { _ilike: "%" + filterValue }
        }
    ]
    return operatorValues
}

const getDateFilterOperator = (filterValue) => {
    const operatorValues = [
        {
            dataGrid: 'before',
            graphQl: {
                dateTime: { _lt: filterValue },
                date: { _lt: filterValue + "T00:00:00" }
            }
        },
        {
            dataGrid: 'after',
            graphQl: {
                dateTime: { _gt: filterValue },
                date: { _gt: filterValue + "T23:59:59" }
            }
        },
        {
            dataGrid: 'onOrBefore',
            graphQl: {
                dateTime: { _lte: filterValue },
                date: { _lte: filterValue + "T23:59:59" }
            }
        },
        {
            dataGrid: 'onOrAfter',
            graphQl: {
                dateTime: { _gte: filterValue },
                date: { _gte: filterValue + "T00:00:00" }
            }
        }
    ]
    return operatorValues
}
const getBooleanFilterOperator = (filterValue) => {
    const operatorValues = [
        {
            dataGrid: 'is',
            graphQl: { _eq: filterValue }
        },
        {
            dataGrid: 'not',
            graphQl: { _neq: filterValue }
        }
    ]
    return operatorValues
}

export const sortCustomers = (sort, onSortCustomers, customers) => {
    const sortModel: object[] = sortModelFromDataGrid(sort)
    if (sortModel.length > 0) {
        setSortQuery(sort, onSortCustomers)
    } else {
        const firstKey = getFirstKeyOfCustomers(customers)
        unsortCustomers(onSortCustomers, firstKey)
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

const unsortCustomers = (onSortCustomers, firstColumn) => {
    onSortCustomers({
        [firstColumn]: null
    })
}

const getFirstKeyOfCustomers = (customers) => {
    if (customers) {
        const customersList: [] = customers[0]
        if (customersList) {
            return Object.keys(customersList)[0]
        }
    }
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
        setEmptyFilteredQueryValueToGraphQl(onFilterCustomers, filter)
    }
}

//spravim funciu get filterValue a zalovalm ju tu dole tym padom ziskam globalnu premennu cez funkciu
const getQueryFromDataGrid = (filter) => {
    const filteredQueryForGraphQl: object = {}
    const filterModels = filterModelFromDataGrid(filter)

    filterModels.forEach(filterModel => {
        const filterColumnField: string = getFilterColumnField(filterModel)
        const filterOperator: string = filterModel.operatorValue
        const filterValue: string = filterModel.value

        console.log(filterColumnField, 'filterColumnField');

        const columnDataByFilterColumnField = getColumnDataByFilterColumnField(filter, filterColumnField)
        const filterDataType: string = columnDataByFilterColumnField[0].type
        console.log(filterDataType, 'filterDataType');

        console.log(filterModel, 'filterModel1');
        console.log(filterValue, 'filterValue2');
        console.log(filteredQueryForGraphQl, 'filteredQueryForGraphQl');

        //TODO refaktoring
        if (filterDataType === 'string') {
            filterText(filterOperator, filteredQueryForGraphQl, filterColumnField, filterValue)
        }
        if (filterDataType === 'number') {
            const numberFitlerValue = getNumberFitlerValue(filterValue, filterModel, filterColumnField)
            filterNumber(filterOperator, filteredQueryForGraphQl, filterColumnField, numberFitlerValue)
        }
        if (filterDataType === 'boolean' || filterDataType === 'singleSelect') {
            filterBoolean(filterOperator, filteredQueryForGraphQl, filterColumnField, filterValue)
        }

        //TODO filterColumnField si natiahnut uz pred tym
        filterDate(filterOperator, filterDataType, filteredQueryForGraphQl, filterColumnField, filterValue)
    })

    return filteredQueryForGraphQl
}

//TODO refaktoring
const filterText = (filterOperator, filteredQueryForGraphQl, filterColumnField, filterValue) => {
    getFilterGraphQlQuery(filteredQueryForGraphQl, filterColumnField, filterOperator, getStringFilterOperator(filterValue))
}

//TODO refaktoring
const filterNumber = (filterOperator, filteredQueryForGraphQl, filterColumnField, filterValue) => {
    getFilterGraphQlQuery(filteredQueryForGraphQl, filterColumnField, filterOperator, getNumberFilterOperator(filterValue))
}

const getFilterGraphQlQuery = (filteredQueryForGraphQl, filterColumnField, filterOperator, getTypeFilterOperator) => {
    const filterOperatorList = getTypeFilterOperator
    const currentOperatorFromDataGrid = filterOperatorList.filter((operator) => operator.dataGrid === filterOperator)
    const graphQlQuery = currentOperatorFromDataGrid[0]?.graphQl

    filteredQueryForGraphQl[filterColumnField] = graphQlQuery
}

const integerFields: string[] = ['seq']

const getNumberFitlerValue = (filterValue, filterModel, filterColumnField) => {
    if (isInIntegerFields(filterColumnField)) {
        return numberAvoidDecimal(filterValue, filterModel)
    }
    return filterValue
}

const isInIntegerFields = (filterColumnField) => {
    if (integerFields?.includes(filterColumnField)) {
        return true
    }
    return false
}

const numberAvoidDecimal = (filterValue, filterModel) => {
    filterModel.value = Math.floor(Number(filterValue))
    return Math.floor(Number(filterValue))
}

//TODO refaktoring
const filterBoolean = (filterOperator, filteredQueryForGraphQl, filterColumnField, filterValue) => {
    getFilterGraphQlQuery(filteredQueryForGraphQl, filterColumnField, filterOperator, getBooleanFilterOperator(filterValue))
}

const timeZone = "+01:00"

//TODO refaktoring
const filterDate = (filterOperator, filterDataType, filteredQueryForGraphQl, filterColumnField, filterValue) => {
    if (filterOperator === 'is') {
        if (filterDataType === 'dateTime') {
            filteredQueryForGraphQl[filterColumnField] = { _gte: filterValue + ":00.00000" + timeZone, _lte: filterValue + ":60.00000" + timeZone }
        } else if (filterDataType === 'date') {
            filteredQueryForGraphQl[filterColumnField] = { _gte: filterValue + "T00:00:00.00000" + timeZone, _lte: filterValue + "T24:00:00.00000" + timeZone }
        }
    }
    if (filterOperator === 'not') {
        if (filterDataType === 'dateTime') {
            filteredQueryForGraphQl['_or'] = [{ [filterColumnField]: { _gt: filterValue + ":60.00000" + timeZone } }, { [filterColumnField]: { _lt: filterValue + ":00.00000" + timeZone } }
            ]
        } else if (filterDataType === 'date') {
            filteredQueryForGraphQl['_or'] = [{ [filterColumnField]: { _gt: filterValue + "T24:00:00" } }, { [filterColumnField]: { _lt: filterValue + "T00:00:00" } }
            ]
        }
    }
    if (filterOperator === 'before') {
        if (filterDataType === 'dateTime') {
            filteredQueryForGraphQl[filterColumnField] = { _lt: filterValue + ":00.00000" + timeZone }
        } else if (filterDataType === 'date') {
            filteredQueryForGraphQl[filterColumnField] = { _lt: filterValue + "T00:00:00.00000" + timeZone }
        }
    }
    else if (filterOperator === 'after') {
        if (filterDataType === 'dateTime') {
            filteredQueryForGraphQl[filterColumnField] = { _gt: filterValue + ":60.00000" + timeZone }
        } else if (filterDataType === 'date') {
            filteredQueryForGraphQl[filterColumnField] = { _gt: filterValue + "T24:00:00.00000" + timeZone }
        }
    }
    else if (filterOperator === 'onOrBefore') {
        if (filterDataType === 'dateTime') {
            filteredQueryForGraphQl[filterColumnField] = { _lte: filterValue + ":60.00000" + timeZone }
        } else if (filterDataType === 'date') {
            filteredQueryForGraphQl[filterColumnField] = { _lte: filterValue + "T24:00:00.00000" + timeZone }
        }
    }
    else if (filterOperator === 'onOrAfter') {
        if (filterDataType === 'dateTime') {
            filteredQueryForGraphQl[filterColumnField] = { _gte: filterValue + ":00.00000" + timeZone }
        } else if (filterDataType === 'date') {
            filteredQueryForGraphQl[filterColumnField] = { _gte: filterValue + "T00:00:00.00000" + timeZone }
        }
    }
}

const getFilterColumnField = (filterModel) => {
    return filterModel.columnField
}

const getColumnDataByFilterColumnField = (filter, filterColumnField) => {
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

const setEmptyFilteredQueryValueToGraphQl = (onFilterCustomers, filter) => {
    const columnField: string = filterModelFromDataGrid(filter)[0]?.columnField
    const columnOperator: string = filterModelFromDataGrid(filter)[0]?.operatorValue

    if (getOperatorStringList().includes(columnOperator)) {
        onFilterCustomers({
            [columnField]: {
                _ilike: "%%"
            }
        })
    } else {
        onFilterCustomers({
            [columnField]: {
                _eq: null
            }
        })
    }
}

export const setCurrentPageToOne = (onChangePageCustomers) => {
    onChangePageCustomers(0)
}

const getOperatorStringList = () => {
    return getGridStringOperators().map((operator) => operator.value)
}
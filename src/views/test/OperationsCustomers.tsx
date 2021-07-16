import { getGridStringOperators } from "@material-ui/data-grid";

//TODO let
let filterData;
export const getFilterData = (filter) => {
    filterData = filter
}

//TODO timezone
const timeZone = "+01:00"

const getNumberFilterOperator = () => {
    const filterValue = filterValueFromDataGrid()
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

const getStringFilterOperator = () => {
    const filterValue = filterValueFromDataGrid()
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

const getDateFilterOperator = () => {
    const filterValue = filterValueFromDataGrid()
    const filterColumnField = filterColumnFieldFromDataGrid()
    const operatorValues = [
        {
            dataGrid: 'is',
            graphQl: {
                dateTime: { _gte: filterValue + ":00.00000" + timeZone, _lte: filterValue + ":60.00000" + timeZone },
                date: { _gte: filterValue + "T00:00:00.00000" + timeZone, _lte: filterValue + "T24:00:00.00000" + timeZone }
            }
        },
        {
            dataGrid: 'not',
            graphQl: {
                dateTime: [
                    { [filterColumnField]: { _gt: filterValue + ":60.00000" + timeZone } },
                    { [filterColumnField]: { _lt: filterValue + ":00.00000" + timeZone } }
                ],
                date: [
                    { [filterColumnField]: { _gt: filterValue + "T24:00:00" } },
                    { [filterColumnField]: { _lt: filterValue + "T00:00:00" } }
                ]
            }
        },
        {
            dataGrid: 'before',
            graphQl: {
                dateTime: { _lt: filterValue + ":00.00000" + timeZone },
                date: { _lt: filterValue + "T00:00:00.00000" + timeZone }
            }
        },
        {
            dataGrid: 'after',
            graphQl: {
                dateTime: { _gt: filterValue + ":60.00000" + timeZone },
                date: { _gt: filterValue + "T24:00:00.00000" + timeZone }
            }
        },
        {
            dataGrid: 'onOrBefore',
            graphQl: {
                dateTime: { _lte: filterValue + ":60.00000" + timeZone },
                date: { _lte: filterValue + "T24:00:00.00000" + timeZone }
            }
        },
        {
            dataGrid: 'onOrAfter',
            graphQl: {
                dateTime: { _gte: filterValue + ":00.00000" + timeZone },
                date: { _gte: filterValue + "T00:00:00.00000" + timeZone }
            }
        }
    ]
    return operatorValues
}
const getBooleanFilterOperator = () => {
    const filterValue = filterValueFromDataGrid()
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

export const filterDataGrid = (onFilterCustomers, onChangePageCustomers) => {
    const filteredQueryForGraphQl = getQueryFromDataGrid()
    sendFilterQueryToGraphQl(filteredQueryForGraphQl, onFilterCustomers)
    setCurrentPageToOne(onChangePageCustomers)
}

const sendFilterQueryToGraphQl = (filteredQueryForGraphQl, onFilterCustomers) => {
    const filteredValue: string = filterValueFromDataGrid()
    if (filteredValue) {
        setFilteredQueryToGraphQl(filteredQueryForGraphQl, onFilterCustomers)
    } else {
        setEmptyFilteredQueryValueToGraphQl(onFilterCustomers)
    }
}

//spravim funciu get filterValue a zalovalm ju tu dole tym padom ziskam globalnu premennu cez funkciu
const getQueryFromDataGrid = () => {
    const filteredQueryForGraphQl: object = {}
    const filterModels = filterModelFromDataGrid()

    filterModels.forEach(filterModel => {
        const filterColumnField: string = filterColumnFieldFromDataGrid()
        const filterOperator: string = filterModel?.operatorValue
        const filterValue: string = filterValueFromDataGrid()

        console.log(filterData, 'filterDatafilterData');

        console.log(filterColumnField, 'filterColumnField');

        const columnDataByFilterColumnField = getColumnDataByFilterColumnField()
        const filterDataType: string = columnDataByFilterColumnField[0]?.type
        console.log(filterDataType, 'filterDataType');

        console.log(filterModel, 'filterModel1');
        console.log(filterValue, 'filterValue2');
        console.log(filteredQueryForGraphQl, 'filteredQueryForGraphQl');
        
        //TODO refaktoring
        if (filterDataType === 'string') {
            filterText(filterOperator, filteredQueryForGraphQl)
        }
        if (filterDataType === 'number') {
            const numberFitlerValue = getNumberFitlerValue(filterModel)
            filterNumber(filterOperator, filteredQueryForGraphQl)
        }
        if (filterDataType === 'boolean' || filterDataType === 'singleSelect') {
            filterBoolean(filterOperator, filteredQueryForGraphQl)
        }

        if (filterDataType === 'date' || filterDataType === 'dateTime') {
            filterDate(filterOperator, filteredQueryForGraphQl)
        }
    })

    return filteredQueryForGraphQl
}

//TODO refaktoring
const filterText = (filterOperator, filteredQueryForGraphQl) => {
    getFilterGraphQlQuery(filteredQueryForGraphQl, filterOperator, getStringFilterOperator())
}

//TODO refaktoring
const filterNumber = (filterOperator, filteredQueryForGraphQl) => {
    getFilterGraphQlQuery(filteredQueryForGraphQl, filterOperator, getNumberFilterOperator())
}

//TODO refaktoring
const filterDate = (filterOperator, filteredQueryForGraphQl) => {
    getFilterGraphQlQuery(filteredQueryForGraphQl, filterOperator, getDateFilterOperator())
}

const integerFields: string[] = ['seq']

const getNumberFitlerValue = (filterModel) => {
    if (isInIntegerFields()) {
        return numberAvoidDecimal(filterModel)
    }
    return filterValueFromDataGrid()
}

const isInIntegerFields = () => {
    if (integerFields?.includes(filterColumnFieldFromDataGrid())) {
        return true
    }
    return false
}

const numberAvoidDecimal = (filterModel) => {
    filterModel.value = Math.floor(Number(filterValueFromDataGrid()))
    return Math.floor(Number(filterValueFromDataGrid()))
}

//TODO refaktoring
const filterBoolean = (filterOperator, filteredQueryForGraphQl) => {
    getFilterGraphQlQuery(filteredQueryForGraphQl, filterOperator, getBooleanFilterOperator())
}
const getFilterGraphQlQuery = (filteredQueryForGraphQl, filterOperator, getTypeFilterOperator) => {
    const filterOperatorList = getTypeFilterOperator
    const currentOperatorFromDataGrid = filterOperatorList.filter((operator) => operator.dataGrid === filterOperator)
    const filterDataType: string = getColumnDataByFilterColumnField()[0]?.type
    const graphQlQuery = currentOperatorFromDataGrid[0]?.graphQl

    if (filterDataType === 'date') {
        dateAndDateTime(filterOperator, filteredQueryForGraphQl, graphQlQuery, 'date')
    } else if (filterDataType === 'dateTime') {
        dateAndDateTime(filterOperator, filteredQueryForGraphQl, graphQlQuery, 'dateTime')
    } else {
        filteredQueryForGraphQl[filterColumnFieldFromDataGrid()] = graphQlQuery
    }
}

const dateAndDateTime = (filterOperator, filteredQueryForGraphQl, graphQlQuery, dateType) => {
    if (filterOperator === 'not') {
        filteredQueryForGraphQl['_or'] = graphQlQuery[dateType]
    } else {
        filteredQueryForGraphQl[filterColumnFieldFromDataGrid()] = graphQlQuery[dateType]
    }
}

const filterColumnField = (filterModel) => {
    return filterModel?.columnField
}

const getColumnDataByFilterColumnField = () => {
    return filterData.columns.filter((column) => column.field === filterColumnFieldFromDataGrid())
}


const filterModelFromDataGrid = () => {
    const filteredModel: object = filterData?.filterModel?.items
    if (filteredModel)
        return filterData?.filterModel?.items
        return {}
    }
    
const filterColumnFieldFromDataGrid = () => {
    const filterModels = filterModelFromDataGrid()
    for (let i = 0; i < filterModels.length; i++) {
        return filterColumnField(filterModels[i])
    }
}

const filterValueFromDataGrid = () => {
    const filterModel = filterModelFromDataGrid()
    for (let i = 0; i < filterModel.length; i++) {
        const filteredValue: string = filterModel[i]?.value
        if (filteredValue)
            return filteredValue
    }
    return ""
}
const setFilteredQueryToGraphQl = (filteredQueryForGraphQl, onFilterCustomers) => {
    onFilterCustomers(filteredQueryForGraphQl);
}

const setEmptyFilteredQueryValueToGraphQl = (onFilterCustomers) => {
    const columnField: string = filterColumnFieldFromDataGrid()
    console.log(columnField,'columnFieldcolumnFieldcolumnFieldcolumnFieldcolumnField'); 
    const columnOperator: string = filterModelFromDataGrid()[0]?.operatorValue

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
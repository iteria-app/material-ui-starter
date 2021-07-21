import InputFilterInteger from '../components/InputFilterInteger'

import { getNumberFilterOperator, getStringFilterOperator, getDateFilterOperator, getBooleanFilterOperator } from './filterQueries'
import { GridColTypeDef, getGridNumericColumnOperators, getGridStringOperators } from "@material-ui/data-grid";

let filterData;
export const getFilterData = (filter) => {
    filterData = filter
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

const getQueryFromDataGrid = () => {
    const filteredQueryForGraphQl: object = {}
    const filterModels = filterModelFromDataGrid()

    filterModels.forEach(filterModel => {
        console.log(filterData, 'filterDatafilterData');

        console.log(filterColumnFieldFromDataGrid(), 'filterColumnField');

        const columnDataByFilterColumnField = getColumnDataByFilterColumnField()
        const filterDataType: string = columnDataByFilterColumnField[0]?.type
        console.log(filterDataType, 'filterDataType');

        console.log(filterModel, 'filterModel1');
        console.log(filterValueFromDataGrid(), 'filterValue2');
        console.log(filteredQueryForGraphQl, 'filteredQueryForGraphQl');

        if (filterDataType === 'string') {
            filterText(filteredQueryForGraphQl)
        }
        if (filterDataType === 'number') {
            filterNumber(filteredQueryForGraphQl)
        }
        if (filterDataType === 'boolean' || filterDataType === 'singleSelect') {
            filterBoolean(filteredQueryForGraphQl)
        }
        if (filterDataType === 'date' || filterDataType === 'dateTime') {
            filterDate(filteredQueryForGraphQl)
        }
    })

    return filteredQueryForGraphQl
}

const filterText = (filteredQueryForGraphQl) => {
    getFilterGraphQlQuery(filteredQueryForGraphQl, getStringFilterOperator())
}

const filterNumber = (filteredQueryForGraphQl) => {
    getFilterGraphQlQuery(filteredQueryForGraphQl, getNumberFilterOperator())
}

const filterDate = (filteredQueryForGraphQl) => {
    getFilterGraphQlQuery(filteredQueryForGraphQl, getDateFilterOperator())
}

const filterBoolean = (filteredQueryForGraphQl) => {
    getFilterGraphQlQuery(filteredQueryForGraphQl, getBooleanFilterOperator())
}

const getFilterGraphQlQuery = (filteredQueryForGraphQl, getTypeFilterOperator) => {
    const filterOperatorList = getTypeFilterOperator
    const currentOperatorFromDataGrid = filterOperatorList.filter((operator) =>
        operator.dataGrid === filterOperatorFromDataGrid())

    const filterDataType: string = getColumnDataByFilterColumnField()[0]?.type
    const graphQlQuery = currentOperatorFromDataGrid[0]?.graphQl

    if (filterDataType === 'date') {
        dateAndDateTime(filteredQueryForGraphQl, graphQlQuery, 'date')
    } else if (filterDataType === 'dateTime') {
        dateAndDateTime(filteredQueryForGraphQl, graphQlQuery, 'dateTime')
    } else {
        filteredQueryForGraphQl[filterColumnFieldFromDataGrid()] = graphQlQuery
    }
}

const dateAndDateTime = (filteredQueryForGraphQl, graphQlQuery, dateType) => {
    if (filterOperatorFromDataGrid() === 'not') {
        filteredQueryForGraphQl['_or'] = graphQlQuery[dateType]
    } else {
        filteredQueryForGraphQl[filterColumnFieldFromDataGrid()] = graphQlQuery[dateType]
    }
}

const filterColumnField = (filterModel): string => {
    return filterModel?.columnField
}

const filterColumnOperator = (filterModel): string => {
    return filterModel?.operatorValue
}

const getColumnDataByFilterColumnField = (): object => {
    return filterData.columns.filter((column) => column.field === filterColumnFieldFromDataGrid())
}


const filterModelFromDataGrid = () => {
    const filteredModel: object = filterData?.filterModel?.items
    if (filteredModel)
        return filterData?.filterModel?.items
    return {}
}

export const filterColumnFieldFromDataGrid = (): string => {
    const filterModels = filterModelFromDataGrid()
    for (const filterModel of filterModels) {
        return filterColumnField(filterModel)
    }
}

const filterOperatorFromDataGrid = (): string => {
    const filterModels = filterModelFromDataGrid()
    for (const filterModel of filterModels) {
        return filterColumnOperator(filterModel)
    }
}

export const filterValueFromDataGrid = (): string => {
    const filterModels = filterModelFromDataGrid()
    for (const filterModel of filterModels) {
        const filteredValue: string = filterModel?.value
        if (filteredValue)
            return filteredValue
    }
    return ""
}
const setFilteredQueryToGraphQl = (filteredQueryForGraphQl, onFilterCustomers) => {
    onFilterCustomers(filteredQueryForGraphQl);
}

const setEmptyFilteredQueryValueToGraphQl = (onFilterCustomers) => {
    onFilterCustomers({})
}

export const numberColumnType = getGridNumericColumnOperators().map(
    (operator) => ({
        ...operator,
        InputComponent: InputFilterInteger,
    }),
);

export const createUuidColumnType: GridColTypeDef = {
    extendType: 'string',
    filterOperators: getGridStringOperators()
        .filter((operator) => operator.value === 'equals')
        .map((operator) => {
            return {
                ...operator
            };
        }),
};

export const uuidColumnType = () => {
    return createUuidColumnType?.filterOperators
};

export const setCurrentPageToOne = (onChangePageCustomers) => {
    onChangePageCustomers(0)
}
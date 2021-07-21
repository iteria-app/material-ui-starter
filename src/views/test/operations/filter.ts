import InputFilterInteger from '../components/InputFilterInteger'

import { getNumberFilterOperator, getStringFilterOperator, getDateFilterOperator, getBooleanFilterOperator } from './filterQueries'
import { GridColTypeDef, getGridNumericColumnOperators, getGridStringOperators, GridFilterOperator } from "@material-ui/data-grid";

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

        filterDataByColumnTypeName(filterDataType, filteredQueryForGraphQl)

    })

    return filteredQueryForGraphQl
}

const filterDataByColumnTypeName = (filterDataType, filteredQueryForGraphQl) => {
    if (filterDataType === 'string') {
        getFilterGraphQlQuery(filteredQueryForGraphQl, getStringFilterOperator())
    } else if (filterDataType === 'number') {
        getFilterGraphQlQuery(filteredQueryForGraphQl, getNumberFilterOperator())
    } else if (filterDataType === 'boolean' || filterDataType === 'singleSelect') {
        getFilterGraphQlQuery(filteredQueryForGraphQl, getBooleanFilterOperator())
    } else if (filterDataType === 'date' || filterDataType === 'dateTime') {
        getFilterGraphQlQuery(filteredQueryForGraphQl, getDateFilterOperator())
    }
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
    if (filterModel) {
        return filterModel?.columnField
    }
    return ""
}

const filterColumnOperator = (filterModel): string => {
    if (filterModel) {
        return filterModel?.operatorValue
    }
    return ""
}

const getColumnDataByFilterColumnField = () => {
    if (filterData?.columns) {
        return filterData?.columns.filter((column) => column.field === filterColumnFieldFromDataGrid())
    }
    return []
}

const filterModelFromDataGrid = () => {
    if (filterData?.filterModel) {
        return filterData?.filterModel?.items
    }
    return []
}

export const filterColumnFieldFromDataGrid = (): string => {
    const filterModels = filterModelFromDataGrid()
    for (const filterModel of filterModels) {
        return filterColumnField(filterModel)
    }
    return ""
}

const filterOperatorFromDataGrid = (): string => {
    const filterModels = filterModelFromDataGrid()
    for (const filterModel of filterModels) {
        return filterColumnOperator(filterModel)
    }
    return ""
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

export const uuidColumnType = (): GridFilterOperator[] => {
    if (createUuidColumnType) {
        return createUuidColumnType?.filterOperators
    }
    return []
};

export const setCurrentPageToOne = (onChangePageCustomers) => {
    onChangePageCustomers(0)
}
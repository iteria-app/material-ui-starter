export const sortCustomers = (sort, onSortCustomers) => {
    const sortModel: object[] = sortModelFromDataGrid(sort)
    if (sortModel.length > 0) {
        setSortQuery(sort, onSortCustomers)
    } else {
        onSortCustomers({})
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

const sortModelFromDataGrid = (sort) => {
    const sortModel = sort?.sortModel
    if (sortModel)
        return sortModel
    return {}
}
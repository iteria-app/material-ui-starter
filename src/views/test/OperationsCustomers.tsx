export const sortCustomers = (params, onOrderCustomer) => {
    const result: any = Object.values(params?.sortModel[0])
    const ob = {}
    while (result.length) {
        ob[result.shift()] = result.shift();
    }
    onOrderCustomer(ob)
}

export const unsortCustomers = (onOrderCustomer) => {
    onOrderCustomer({
        "name": "asc"
    })
}
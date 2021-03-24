import { useIntl,FormattedMessage } from "react-intl";
    import { GridColParams,DataGrid } from "@material-ui/data-grid";
    import * as React from "react";
    export default function CustomerIndex({ customers }) {
        const intl = useIntl();
        const columns = [
            { field: "avatarUrl", width: 180, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer.avatarUrl" defaultMessage="avatarUrl"/>) },
            { field: "createdAt", width: 180, type: "date", valueFormatter: ({ value }) => intl.formatDate(value), renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer.createdAt" defaultMessage="createdAt"/>) },
            { field: "email", width: 180, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer.email" defaultMessage="email"/>) },
            { field: "id", width: 180, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer.id" defaultMessage="id"/>) },
            { field: "name", width: 180, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer.name" defaultMessage="name"/>) },
            { field: "phone", width: 180, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer.phone" defaultMessage="phone"/>) },
            { field: "updatedAt", width: 180, type: "date", valueFormatter: ({ value }) => intl.formatDate(value), renderHeader: (params: GridColParams) => (<FormattedMessage id="Customer.updatedAt" defaultMessage="updatedAt"/>) }
        ];
        return (<div style={{ height: "400px", width: "100%" }}>            <DataGrid columns={columns} rows={customers}/>          </div>);
    }
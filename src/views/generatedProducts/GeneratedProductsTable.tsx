import React from "react";
import { FormattedMessage } from "react-intl";
import { GridColParams, DataGrid } from "@material-ui/data-grid";

export default function GeneratedProductsTable({ products }) {

  const columns = [
    { field: "description", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="products" defaultMessage="description" />) },
    { field: "title", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="products" defaultMessage="title" />) },
    { field: "media", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="products" defaultMessage="media" />) },
    { field: "id", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="products" defaultMessage="id" />) },
    { field: "totalDownloads", flex: 1, type: "string", valueFormatter: ({ value }) => value, renderHeader: (params: GridColParams) => (<FormattedMessage id="products" defaultMessage="totalDownloads" />) }
  ];
  return (<div style={{ height: "400px", width: "100%" }}><DataGrid columns={columns} rows={products} /></div>);
}



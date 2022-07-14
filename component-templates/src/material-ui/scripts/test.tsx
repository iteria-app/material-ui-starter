//temporary file to be removed, just for testing
//@ts-nocheck
import React from 'react'
import { useIntl } from 'react-intl'
import { FormattedMessage } from 'react-intl'
import { DataGrid, GridFilterModel } from '@mui/x-data-grid'
// import { useNavigate } from 'react-router-dom'
// import { Order_By } from '@graphql-generated'
import { IEntityTableProps } from '../listPage/ListPagePlaceholder'
import { useInsert_SmenaMutation } from 'src/generated/graphql'
const EntityTable: React.FC<IEntityTableProps> = (props: IEntityTableProps) => {
  const intl = useIntl()
  const columns = [
    {
      field: 'id',
      flex: 1,
      type: 'Int',
      valueFormatter: ({ value }: any) => value,
      renderHeader: () => <FormattedMessage id="id.Int" defaultMessage="id" />,
    },
    {
      field: 'informacia_kancelaria',
      flex: 1,
      type: 'String',
      valueFormatter: ({ value }: any) => value,
      renderHeader: () => (
        <FormattedMessage
          id="informacia_kancelaria.String"
          defaultMessage="informacia_kancelaria"
        />
      ),
    },
    {
      field: 'informacia_teren',
      flex: 1,
      type: 'String',
      valueFormatter: ({ value }: any) => value,
      renderHeader: () => (
        <FormattedMessage
          id="informacia_teren.String"
          defaultMessage="informacia_teren"
        />
      ),
    },
    {
      field: 'name',
      flex: 1,
      type: 'String',
      valueFormatter: ({ value }: any) => value,
      renderHeader: () => (
        <FormattedMessage id="name.String" defaultMessage="name" />
      ),
    },
    {
      field: 'ok',
      flex: 1,
      type: 'Boolean',
      valueFormatter: ({ value }: any) => value,
      renderHeader: () => (
        <FormattedMessage id="ok.Boolean" defaultMessage="ok" />
      ),
    },
    {
      field: 'platny',
      flex: 1,
      type: 'Boolean',
      valueFormatter: ({ value }: any) => value,
      renderHeader: () => (
        <FormattedMessage id="platny.Boolean" defaultMessage="platny" />
      ),
    },
    {
      field: 'smena_typ_fk',
      flex: 1,
      type: 'Int',
      valueFormatter: ({ value }: any) => value,
      renderHeader: () => (
        <FormattedMessage id="smena_typ_fk.Int" defaultMessage="smena_typ_fk" />
      ),
    },
    {
      field: 'termin_cas_do',
      flex: 1,
      type: 'time',
      valueFormatter: ({ value }: any) => (value ? intl.formatTime(value) : ''),
      renderHeader: () => (
        <FormattedMessage
          id="termin_cas_do.time"
          defaultMessage="termin_cas_do"
        />
      ),
    },
    {
      field: 'termin_cas_od',
      flex: 1,
      type: 'time',
      valueFormatter: ({ value }: any) => (value ? intl.formatTime(value) : ''),
      renderHeader: () => (
        <FormattedMessage
          id="termin_cas_od.time"
          defaultMessage="termin_cas_od"
        />
      ),
    },
    {
      field: 'termin_datum_do',
      flex: 1,
      type: 'date',
      valueFormatter: ({ value }: any) => (value ? intl.formatDate(value) : ''),
      renderHeader: () => (
        <FormattedMessage
          id="termin_datum_do.date"
          defaultMessage="termin_datum_do"
        />
      ),
    },
    {
      field: 'termin_datum_od',
      flex: 1,
      type: 'date',
      valueFormatter: ({ value }: any) => (value ? intl.formatDate(value) : ''),
      renderHeader: () => (
        <FormattedMessage
          id="termin_datum_od.date"
          defaultMessage="termin_datum_od"
        />
      ),
    },
    {
      field: 'termin_do',
      flex: 1,
      type: 'timestamp',
      valueFormatter: ({ value }: any) =>
        value ? `${intl.formatDate(value)}, ${intl.formatTime(value)}` : '',
      renderHeader: () => (
        <FormattedMessage id="termin_do.timestamp" defaultMessage="termin_do" />
      ),
    },
    {
      field: 'termin_od',
      flex: 1,
      type: 'timestamp',
      valueFormatter: ({ value }: any) =>
        value ? `${intl.formatDate(value)}, ${intl.formatTime(value)}` : '',
      renderHeader: () => (
        <FormattedMessage id="termin_od.timestamp" defaultMessage="termin_od" />
      ),
    },
  ]
  return (
    <DataGrid
      onRowClick={props.onClickRow}
      columns={columns}
      rows={[
        {
          id: 'xx',
          name: 'Martin Mecir',
          test: true,
          gender: 'male',
          address: 'Zakostolska, Velke Kostolany',
        },
        {
          id: 'xxxx',
          name: 'Martin Bilansky',
          test: false,
          gender: 'male',
          address: 'Ludovita Stura, Bratislava',
        },
      ]}
      paginationMode="server"
      sortingMode="server"
      filterMode="server"
      pageSize={props.filter?.pageSize}
      rowCount={props.filter?.rowCount}
      page={props.filter?.page}
      sortModel={props.filter?.sortModel}
      filterModel={props.filter?.filterModel}
      onPageChange={(newPage: number) =>
        props.onChangeFilter({ page: newPage })
      }
      onFilterModelChange={(model: GridFilterModel) =>
        props.onChangeFilter({ filterModel: model })
      }
      loading={props.loading}
      rowsPerPageOptions={[2, 3, 4, 5, 6, 20]}
    />
  )
}
export default EntityTable

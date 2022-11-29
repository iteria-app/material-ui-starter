import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import {
  InputLabel,
  TableCell,
  TableRow,
  Input,
  TextField,
} from '@mui/material'
import AdapterDateFns from '@date-io/date-fns'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import {
  Formik,
  useFormikContext,
  Field as FormikField,
  FieldProps,
} from 'formik'
import {
  getRelationshipField,
  Translate,
  columnCount,
  saveDate,
} from '@iteria-app/component-templates'
interface IProps {
  relationshipName?: string
  index?: number
}
const OrdersForm: React.FC<IProps> = ({ relationshipName }) => {
  const { setFieldValue } = useFormikContext()
  const columns = [
    <TableRow
      key="title"
      sx={{
        '& td, & th': {
          border: 'none',
          whiteSpace: 'break-spaces',
        },
        '& .MuiTableCell-root:first-of-type': {
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
        '& .MuiTableCell-root:last-child': {
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
        },
      }}
    >
      <TableCell sx={{ width: '50%', padding: '14.5px 14px' }}>
        <InputLabel>
          <Translate
            entityName="orders"
            fieldName={getRelationshipField('title')}
            defaultMessage="Title"
          />
        </InputLabel>
      </TableCell>
      <TableCell
        sx={{
          width: '50%',
          textAlign: 'left',
          padding: '8px 16px',
        }}
      >
        <FormikField
          name={relationshipName ? `${relationshipName}.${'title'}` : 'title'}
        >
          {(fieldProps: FieldProps) => {
            return (
              <Input
                name={
                  relationshipName ? `${relationshipName}.${'title'}` : 'title'
                }
                onChange={fieldProps.field.onChange}
                onBlur={fieldProps.field.onBlur}
                onClick={(event) => {
                  event.stopPropagation()
                }}
                fullWidth
                value={fieldProps.field.value ?? ''}
              />
            )
          }}
        </FormikField>
      </TableCell>
    </TableRow>,
    <TableRow
      key="order_date"
      sx={{
        '& td, & th': {
          border: 'none',
          whiteSpace: 'break-spaces',
        },
        '& .MuiTableCell-root:first-of-type': {
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
        '& .MuiTableCell-root:last-child': {
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
        },
      }}
    >
      <TableCell sx={{ width: '50%', padding: '14.5px 14px' }}>
        <InputLabel>
          <Translate
            entityName="orders"
            fieldName={getRelationshipField('order_date')}
            defaultMessage="Order date"
          />
        </InputLabel>
      </TableCell>
      <TableCell
        sx={{
          width: '50%',
          textAlign: 'left',
          padding: '8px 16px',
        }}
      >
        <FormikField
          name={
            relationshipName
              ? `${relationshipName}.${'order_date'}`
              : 'order_date'
          }
        >
          {(fieldProps: FieldProps) => {
            return (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={fieldProps.field.value}
                  onChange={(val: Date | null) => {
                    setFieldValue(
                      relationshipName
                        ? `${relationshipName}.${'order_date'}`
                        : 'order_date',
                      saveDate(val),
                      false
                    )
                  }}
                  renderInput={(params) => (
                    <TextField fullWidth variant="standard" {...params} />
                  )}
                />
              </LocalizationProvider>
            )
          }}
        </FormikField>
      </TableCell>
    </TableRow>,
    <TableRow
      key="shipped_date"
      sx={{
        '& td, & th': {
          border: 'none',
          whiteSpace: 'break-spaces',
        },
        '& .MuiTableCell-root:first-of-type': {
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
        '& .MuiTableCell-root:last-child': {
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
        },
      }}
    >
      <TableCell sx={{ width: '50%', padding: '14.5px 14px' }}>
        <InputLabel>
          <Translate
            entityName="orders"
            fieldName={getRelationshipField('shipped_date')}
            defaultMessage="Shipped date"
          />
        </InputLabel>
      </TableCell>
      <TableCell
        sx={{
          width: '50%',
          textAlign: 'left',
          padding: '8px 16px',
        }}
      >
        <FormikField
          name={
            relationshipName
              ? `${relationshipName}.${'shipped_date'}`
              : 'shipped_date'
          }
        >
          {(fieldProps: FieldProps) => {
            return (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={fieldProps.field.value}
                  onChange={(val: Date | null) => {
                    setFieldValue(
                      relationshipName
                        ? `${relationshipName}.${'shipped_date'}`
                        : 'shipped_date',
                      saveDate(val),
                      false
                    )
                  }}
                  renderInput={(params) => (
                    <TextField fullWidth variant="standard" {...params} />
                  )}
                />
              </LocalizationProvider>
            )
          }}
        </FormikField>
      </TableCell>
    </TableRow>,
  ]
  return <>{columns.map((field) => field)}</>
}
export default OrdersForm

import React from 'react'
import { TableCell, TableRow, TextField, Typography } from '@mui/material'
import { Field as FormikField } from 'formik'
import { Field } from '../../gql'
import { DateTimePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

interface IDateTimeFieldProps {
  entityName: string
  entityField: Field
  name: string
  value: string
  label?: string | JSX.Element
  index?: number
}

export const DateTimeField: React.FC<IDateTimeFieldProps> = ({
  entityName,
  entityField,
  name,
  value,
  label,
  index,
}: IDateTimeFieldProps): JSX.Element => {
  const inputProps = {
    fullWidth: true,
    name: name,
    type: entityField.type,
    value: value,
    required: entityField.required,
    error: !value && entityField.required,
    variant: 'standard',
  }
  const zone = new Date().getTimezoneOffset() / -60
  let initialValue: any

  const parseDate = (d: any) => {
    if (!initialValue) initialValue = value
    if (entityField.type.toLowerCase() == 'timestamptz' || d === initialValue)
      return d
    const parsedDate = new Date(d)
    parsedDate.setHours(parsedDate.getHours() - zone)
    return parsedDate
  }

  const saveDate = (d: any) => {
    if (!d || d == 'Invalid Date') return 'Invalid Date'
    if (entityField.type.toLowerCase() == 'timestamptz') return d?.toISOString()
    const parsedDate = new Date(d)
    parsedDate.setHours(parsedDate.getHours() + zone)
    return parsedDate.toISOString()
  }

  const even = index ? index % 2 == 0 : false

  return (
    <FormikField name={name}>
      {({ field, form }: any) => {
        return (
          <TableRow
            key={'rowname'}
            // @ts-ignore
            sx={{
              'td, th': {
                border: 'none',
                whiteSpace: 'break-spaces',
                background: (even || index == 0) && '#F2F3F4',
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
            {label && (
              <TableCell sx={{ width: '100%', padding: '5px 16px' }}>
                <Typography fontSize={'14px'}>{label}</Typography>
              </TableCell>
            )}
            <TableCell
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                width: '100%',
                textAlign: 'left',
                padding: '4px 16px',
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  {...field}
                  value={parseDate(value)}
                  ampm={false}
                  onChange={(value: Date) => {
                    form.setFieldValue(
                      entityField.name,
                      // @ts-ignore
                      saveDate(value),
                      true
                    )
                  }}
                  renderInput={(params) => (
                    // @ts-ignore
                    <TextField
                      {...params}
                      {...inputProps}
                      error={value == 'Invalid Date'}
                    />
                  )}
                />
              </LocalizationProvider>
            </TableCell>
          </TableRow>
        )
      }}
    </FormikField>
  )
}

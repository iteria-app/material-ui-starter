import React from 'react'
import { TableCell, TableRow, TextField, Typography } from '@mui/material'
import { Field as FormikField } from 'formik'
import { Field } from '../../gql'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

interface IDateFieldProps {
  entityName: string
  entityField: Field
  name: string
  value: string
  label?: string | JSX.Element
  index?: number
}

export const DateField: React.FC<IDateFieldProps> = ({
  entityName,
  entityField,
  name,
  value,
  label,
  index,
}: IDateFieldProps): JSX.Element => {
  const inputProps = {
    fullWidth: true,
    name: name,
    type: entityField.type,
    value: value,
    required: entityField.required,
    error: !value && entityField.required,
    variant: 'standard',
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
                <DatePicker
                  {...field}
                  onChange={(value: unknown) => {
                    form.setFieldValue(
                      entityField.name,
                      // @ts-ignore
                      value?.toISOString() ?? 'Invalid Date',
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

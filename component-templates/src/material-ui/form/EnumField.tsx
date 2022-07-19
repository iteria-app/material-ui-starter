import React from 'react'
import { Input, Select, TableCell, TableRow, TextField, Typography, MenuItem } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider, DateTimePicker } from '@mui/lab'
import { FastField as FormikField, FormikProps, FormikValues, useField } from 'formik'
import { Field } from '../../gql'

interface IEnumFieldProps {
  entityName: string
  entityField: Field
  name: string
  value: string
  label?: string | JSX.Element
  formikProps: FormikProps<FormikValues>
  index?: number
}

const isDateTime = (type: string): boolean => {
  switch (type.toLowerCase()) {
    case 'timestamp':
    case 'timestamptz':
    case 'datetime':
      return true
    default:
      return false
  }
}

const getInputType = (type: string): string => {
  return isDateTime(type) ? 'datetime-local' : type
}

const getInputValue = (type: string, value: string | null): string | null => {
  if (isDateTime(type)) {
    return value ? value.slice(0, 19) : new Date().toISOString().slice(0, 19)
  }
  if (value === '') return null
  return value
}

export const EnumField: React.FC<IEnumFieldProps> = ({
  entityName,
  entityField,
  name,
  value,
  label,
  formikProps,
  index,
}: IEnumFieldProps): JSX.Element => {
  const inputProps = {
    fullWidth: true,
    multiline: true,
    name: name,
    type: getInputType(entityField.type),
    ...(entityField.type === 'number' ? { step: '.01' } : {}),
    required: entityField.required,
    error: !value && entityField.required,
    disabled: entityField.disabled
  }

  const even = index ? index % 2 == 0 : false

  return (
    <FormikField
      name={name}
      component={({ field }: any) => {
        return (
          <TableRow
            key={'rowname'}
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
              <TableCell sx={{ width: '50%', padding: '14.5px 14px' }}>
                <Typography fontSize={'14px'}>{label}</Typography>
              </TableCell>
            )}
            <TableCell
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                width: '50%',
                textAlign: 'left',
                padding: '0px 0px',
              }}
            >
              <Select 
              {...field} 
              {...inputProps}
              sx={{
                margin: '0',
                padding: '0'
              }}>
                {entityField.enumValues
                  .map((field: string) =>
                    <MenuItem value={field}>{field}</MenuItem>)}
              </Select>
            </TableCell>
          </TableRow>
        )
      }}
    >
    </FormikField>
  )
}

import React from 'react'
import { TableCell, TableRow, TextField, Typography } from '@mui/material'
import { Field as FormikField } from 'formik'
import { Field } from '../../gql'
import { LocalizationProvider, TimePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

interface ITimeFieldProps {
  entityName: string
  entityField: Field
  name: string
  value: string
  label?: string | JSX.Element
  index?: number
}

export const TimeField: React.FC<ITimeFieldProps> = ({
  entityName,
  entityField,
  name,
  value,
  label,
  index,
}: ITimeFieldProps): JSX.Element => {
  const zone = new Date().getTimezoneOffset() / -60
  let initialValue: string

  const parseTime = (t: string) => {
    if (!initialValue) initialValue = value
    const d = new Date()
    const time = t.split(':')
    if (entityField.type.toLowerCase() == 'time' && t !== initialValue)
      d.setHours(parseInt(time[0]) + zone || 0)
    else d.setHours(parseInt(time[0]) || 0)
    d.setMinutes(parseInt(time[1]) || 0)
    return d
  }

  const saveTime = (t: any) => {
    if (!t || t == 'Invalid Date') return 'Invalid Date'
    if (entityField.type.toLowerCase() == 'timestamptz')
      return t?.toISOString()?.split('T')?.[1]
    const parsedTime = new Date(t)
    parsedTime.setHours(parsedTime.getHours() + zone)
    return parsedTime.toISOString().split('T')[1]
  }

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
                <TimePicker
                  {...field}
                  ampm={false}
                  value={parseTime(value)}
                  onChange={(value: unknown) => {
                    form.setFieldValue(entityField.name, saveTime(value), true)
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

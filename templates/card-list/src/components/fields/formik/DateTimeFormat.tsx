import React from 'react'
import { TextField } from '@mui/material'
import { Field as FormikField } from 'formik'
import AdapterDateFns from '@date-io/date-fns'
import { DateTimePicker } from '@mui/lab'
import { LocalizationProvider } from '@mui/lab'
import { saveDateTime } from '@iteria-app/component-templates'

export const DateTimeFormat = ({
  value,
  relationshipName,
  index,
  setFieldValue,
}) => {
  return (
    <FormikField
      name={
        relationshipName
          ? index !== undefined
            ? `${relationshipName}[${index}].${'FIELD'}`
            : `${relationshipName}.${'FIELD'}`
          : 'FIELD'
      }
    >
      {({ field }: any) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              {...field}
              value={field.value}
              ampm={false}
              onChange={(value: Date | null) => {
                setFieldValue(field.name, saveDateTime(value), false)
              }}
              renderInput={(params) => (
                <TextField fullWidth variant="standard" {...params} />
              )}
            />
          </LocalizationProvider>
        )
      }}
    </FormikField>
  )
}

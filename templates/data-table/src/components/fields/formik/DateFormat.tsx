import React from 'react'
import { TextField } from '@mui/material'
import { FastField as FormikField } from 'formik'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@date-io/date-fns'
import { saveDate } from '@iteria-app/component-templates'

export const DateFormat = ({
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
            <DatePicker
              {...field}
              value={field.value}
              onChange={(value: Date | null) => {
                setFieldValue(field.name, saveDate(value), false)
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

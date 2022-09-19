import React from 'react'
import { TextField } from '@mui/material'
import { Field as FormikField } from 'formik'
import { LocalizationProvider, TimePicker } from '@mui/lab'
import { saveTime } from '@iteria-app/component-templates'
import AdapterDateFns from '@date-io/date-fns'

export const TimeFormat = ({
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
            <TimePicker
              {...field}
              ampm={false}
              value={field.value}
              onChange={(value: Date | null) => {
                setFieldValue(field.name, saveTime(value), false)
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

import React from 'react'
import { TextField } from '@mui/material'
import AdapterDateFns from '@date-io/date-fns'
import { DateTimePicker, LocalizationProvider } from '@mui/lab'
import { saveDateTime } from '@iteria-app/component-templates'

type DateTimeFormatProps = {
  name: string
  value?: Date | string | number
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const DateTimeFormat = ({
  name,
  value,
  setFieldValue,
}: DateTimeFormatProps): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        value={value}
        ampm={false}
        onChange={(val: Date | null) => {
          setFieldValue(name, saveDateTime(val), false)
        }}
        renderInput={(params) => (
          <TextField fullWidth variant="standard" {...params} />
        )}
      />
    </LocalizationProvider>
  )
}

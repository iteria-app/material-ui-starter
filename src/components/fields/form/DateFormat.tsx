import React from 'react'
import { TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@date-io/date-fns'
import { saveDate } from '@iteria-app/component-templates'
type DateFormatProps = {
  name: string
  value?: Date | string | number
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}
export const DateFormat = ({
  name,
  value,
  setFieldValue,
}: DateFormatProps): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={(val: Date | null) => {
          setFieldValue(name, saveDate(val), false)
        }}
        renderInput={(params) => (
          <TextField fullWidth variant="standard" {...params} />
        )}
      />
    </LocalizationProvider>
  )
}

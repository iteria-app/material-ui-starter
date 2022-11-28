import React from 'react'
import { TextField } from '@mui/material'
import { LocalizationProvider, TimePicker } from '@mui/lab'
import { saveTime } from '@iteria-app/component-templates'
import AdapterDateFns from '@date-io/date-fns'

type DateTimeFormatProps = {
  name: string
  value?: Date | string | number
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const TimeFormat = ({
  name,
  value,
  setFieldValue,
}: DateTimeFormatProps): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampm={false}
        value={value}
        onChange={(value: Date | null) => {
          setFieldValue(name, saveTime(value), false)
        }}
        renderInput={(params) => (
          <TextField fullWidth variant="standard" {...params} />
        )}
      />
    </LocalizationProvider>
  )
}

import React from 'react'
import { TextField, Typography, Grid } from '@mui/material'
import AdapterDateFns from '@date-io/date-fns'
import { DateTimePicker, LocalizationProvider } from '@mui/lab'
import { saveDateTime } from '@iteria-app/component-templates'

type DateTimeFormatProps = {
  name: string
  label?: string
  value?: Date | string | number
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const DateTimeFormat = ({
  name,
  label,
  value,
  setFieldValue,
}: DateTimeFormatProps): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container alignItems={'center'} paddingY={1}>
        <DateTimePicker
          value={value ?? null}
          ampm={false}
          label={label}
          onChange={(val: Date | null) => {
            setFieldValue(name, saveDateTime(val), false)
          }}
          renderInput={(params) => (
            <TextField fullWidth variant="standard" {...params} />
          )}
        />
      </Grid>
    </LocalizationProvider>
  )
}
// {label && <Typography>{label}: </Typography>}

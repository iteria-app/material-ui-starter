import React from 'react'
import { Grid, TextField, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@date-io/date-fns'
import { saveDate } from '@iteria-app/component-templates'

type DateFormatProps = {
  name: string
  label?: string
  value?: Date | string | number
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const DateFormat = ({
  name,
  label,
  value,
  setFieldValue,
}: DateFormatProps): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container alignItems={'center'} paddingY={1}>
        <DatePicker
          value={value ?? null}
          label={label}
          onChange={(val: Date | null) => {
            setFieldValue(name, saveDate(val), false)
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

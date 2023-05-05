import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Input, Typography, Grid, TextField } from '@mui/material'

type IntegerFormatProps = {
  name: string
  label?: string
  value?: string | number
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const IntegerFormat = ({
  value,
  name,
  label,
  onChange,
  onBlur,
}: IntegerFormatProps): JSX.Element => (
  <Grid container alignItems={'center'} paddingY={1}>
    <TextField
      type="number"
      name={name}
      variant="standard"
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      onClick={(event) => {
        event.stopPropagation()
      }}
      fullWidth
      value={value ?? ''}
    />
  </Grid>
)

// {label && <Typography>{label}: </Typography>}

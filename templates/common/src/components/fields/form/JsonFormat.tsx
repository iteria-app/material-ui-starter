import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Input, Typography, Grid, TextField } from '@mui/material'

type JsonFormatProps = {
  name: string
  label?: string
  value?: Record<string, any> | any[]
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const JsonFormat = ({
  value,
  name,
  label,
  onChange,
  onBlur,
}: JsonFormatProps): JSX.Element => (
  <Grid container alignItems={'center'} paddingY={1}>
    <TextField
      name={name}
      label={label}
      variant="standard"
      onChange={onChange}
      onBlur={onBlur}
      onClick={(event) => {
        event.stopPropagation()
      }}
      fullWidth={true}
      value={JSON.stringify(value) ?? ''}
    />
  </Grid>
)

// {label && <Typography>{label}: </Typography>}

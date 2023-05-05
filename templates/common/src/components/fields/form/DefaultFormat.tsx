import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Grid, Input, Typography, TextField } from '@mui/material'

type DefaultFormatProps = {
  name: string
  label?: string
  value?: any
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const DefaultFormat = ({
  value,
  name,
  label,
  onChange,
  onBlur,
}: DefaultFormatProps): JSX.Element => (
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
      fullWidth
      value={value ?? ''}
    />
  </Grid>
)

// {label && <Typography>{label}: </Typography>}

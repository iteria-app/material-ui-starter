import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Grid, InputLabel, Input, TextField } from '@mui/material'

type StringFormatProps = {
  name: string
  value?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
  title?: string
  label?: string
  type?: string
}

export const StringFormat = ({
  value,
  name,
  onChange,
  onBlur,
  title,
  label,
}: StringFormatProps): JSX.Element => (
  <Grid container alignItems={'center'} paddingY={1}>
    <TextField
      name={name}
      label={label}
      variant="standard"
      title={title}
      onChange={onChange}
      onBlur={onBlur}
      onClick={(event) => {
        event.stopPropagation()
      }}
      InputProps={{
        startAdornment: <></>,
      }}
      fullWidth
      type="string"
      value={value ?? ''}
    />
  </Grid>
)

// {label && <InputLabel>{label}: </InputLabel>}
// <Input
//   name={name}
//   placeholder={title}
//   title={title}
//   onChange={onChange}
//   onBlur={onBlur}
//   onClick={(event) => {
//     event.stopPropagation()
//   }}
//   fullWidth
//   type="string"
//   value={value ?? ''}
// />

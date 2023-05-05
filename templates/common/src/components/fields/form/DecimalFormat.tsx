import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import {Grid, Input, Typography} from '@mui/material'

type DecimalFormatProps = {
  name: string
  label?: string
  value?: string | number
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const DecimalFormat = ({
  value,
  name,
  label,
  onChange,
  onBlur,
}: DecimalFormatProps): JSX.Element => (
  <Grid container alignItems={'center'}>
    {label && <Typography>{label}: </Typography>}
    <Input
      type="number"
      inputProps={{
        step: '0.1',
      }}
      name={name}
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

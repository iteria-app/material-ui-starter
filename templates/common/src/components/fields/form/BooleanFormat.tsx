import {
  Checkbox as CheckboxInput,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material'
import React, { ChangeEventHandler, FocusEventHandler } from 'react'

type BooleanFormatProps = {
  name: string
  label?: string
  value?: boolean
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const BooleanFormat = ({
  value,
  name,
  label,
  onChange,
}: BooleanFormatProps): JSX.Element => {
  return (
    <Grid container alignItems={'center'}>
      <FormControlLabel
        control={
          <CheckboxInput name={name} onChange={onChange} checked={value} />
        }
        label={label ?? ''}
      />
    </Grid>
  )
}

// {label && <Typography>{label}: </Typography>}

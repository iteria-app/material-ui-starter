import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Input } from '@mui/material'

type DecimalFormatProps = {
  name: string
  value?: string | number
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const DecimalFormat = ({
  value,
  name,
  onChange,
  onBlur,
}: DecimalFormatProps): JSX.Element => (
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
)

import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Input } from '@mui/material'

type IntegerFormatProps = {
  name: string
  value?: string | number
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const IntegerFormat = ({
  value,
  name,
  onChange,
  onBlur,
}: IntegerFormatProps): JSX.Element => (
  <Input
    type="number"
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

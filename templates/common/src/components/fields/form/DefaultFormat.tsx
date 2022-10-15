import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Input } from '@mui/material'

type DefaultFormatProps = {
  value: string
  name: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const DefaultFormat = ({
  value,
  name,
  onChange,
  onBlur,
}: DefaultFormatProps): JSX.Element => (
  <Input
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    onClick={(event) => {
      event.stopPropagation()
    }}
    fullWidth={true}
    value={value ?? ''}
  />
)

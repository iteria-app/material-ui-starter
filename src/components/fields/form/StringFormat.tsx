import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Input } from '@mui/material'
type DefaultFormatProps = {
  name: string
  value?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
}
export const StringFormat = ({
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
    fullWidth
    value={value ?? ''}
  />
)

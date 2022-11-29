import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { Input } from '@mui/material'
type JsonFormatProps = {
  name: string
  value?: Record<string, any> | any[]
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
}
export const JsonFormat = ({
  value,
  name,
  onChange,
  onBlur,
}: JsonFormatProps): JSX.Element => (
  <Input
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    onClick={(event) => {
      event.stopPropagation()
    }}
    fullWidth={true}
    value={JSON.stringify(value) ?? ''}
  />
)

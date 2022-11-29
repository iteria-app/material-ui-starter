import { Checkbox as CheckboxInput } from '@mui/material'
import React, { ChangeEventHandler, FocusEventHandler } from 'react'
type BooleanFormatProps = {
  name: string
  value?: boolean
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}
export const BooleanFormat = ({
  value,
  name,
  onChange,
}: BooleanFormatProps): JSX.Element => {
  return <CheckboxInput name={name} onChange={onChange} checked={value} />
}

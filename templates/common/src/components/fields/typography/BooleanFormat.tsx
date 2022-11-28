import { Checkbox } from '@mui/material'
import React from 'react'

export const BooleanFormat = ({ value }: { value: boolean }): JSX.Element => {
  return <Checkbox checked={value} />
}

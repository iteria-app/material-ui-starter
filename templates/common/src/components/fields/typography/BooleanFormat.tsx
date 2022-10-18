import { Checkbox } from '@mui/material'
import React from 'react'

export const BooleanFormat = ({ value }: {value?: any}): JSX.Element => {
  return <Checkbox checked={value} />
}

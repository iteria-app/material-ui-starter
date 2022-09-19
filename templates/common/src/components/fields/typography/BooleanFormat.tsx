import { Checkbox } from '@mui/material'
import React from 'react'

export const BooleanFormat = ({ value }: {value?: any}) => {
  return <Checkbox defaultChecked={value} />
}

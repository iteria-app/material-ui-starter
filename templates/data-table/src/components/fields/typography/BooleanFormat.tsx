import { Checkbox } from '@mui/material'
import React from 'react'

export const BooleanFormat = ({ value }) => {
  return <Checkbox defaultChecked={value} />
}

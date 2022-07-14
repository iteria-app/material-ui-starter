import React from 'react'
import { Checkbox } from '@mui/material'

export const booleanFormatTemplate = ({ value }: any) => {
  if (value == undefined) return 'Loading...'
  return value ? <Checkbox defaultChecked /> : <Checkbox />
}

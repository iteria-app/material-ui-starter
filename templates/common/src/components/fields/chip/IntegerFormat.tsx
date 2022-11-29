import { Chip } from '@mui/material'
import React from 'react'

export const IntegerFormat = ({ value }: { value?: string | number }) => {
  return <>{value != null && <Chip label={value ?? ''} size="small" />}</>
}

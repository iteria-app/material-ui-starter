import { Chip } from '@mui/material'
import React from 'react'

export const DecimalFormat = ({ value }: { value?: string | number }) => {
  return <>{value != null && <Chip label={value ?? ''} size="small" />}</>
}

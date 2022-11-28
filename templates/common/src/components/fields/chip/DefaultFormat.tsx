import { Chip } from '@mui/material'
import React from 'react'

export const DefaultFormat = ({ value }: { value?: any }) => {
  return <>{value != null && <Chip label={value} size="small" />}</>
}

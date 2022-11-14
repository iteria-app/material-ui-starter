import { Chip } from '@mui/material'
import React from 'react'

export const DefaultFormat = ({ value }: { value: string }) => {
  return <>{value != null && <Chip label={value} size="small" />}</>
}

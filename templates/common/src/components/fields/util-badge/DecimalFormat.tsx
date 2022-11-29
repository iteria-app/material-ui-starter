import { Badge } from '@mui/material'
import React from 'react'

export const DecimalFormat = ({ value }: { value?: string | number }) => {
  return <Badge color="primary" badgeContent={value ?? ''} />
}

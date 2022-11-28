import { Badge } from '@mui/material'
import React from 'react'

export const DefaultFormat = ({ value }: { value?: any }) => {
  return <Badge color="primary" badgeContent={value} />
}

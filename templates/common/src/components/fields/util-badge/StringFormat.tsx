import { Badge } from '@mui/material'
import React from 'react'

export const StringFormat = ({ value }: { value?: string }) => {
  return <Badge color="primary" badgeContent={value} />
}

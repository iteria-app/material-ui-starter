import React from 'react'
import DoneIcon from '@mui/icons-material/MoreVert'
import { Badge } from '@mui/material'

export const BooleanFormat = ({ value }: { value: boolean }) => {
  return <Badge color="primary" badgeContent={value ? <DoneIcon /> : 'x'} />
}

import Chip from '@mui/material/Chip'
import React from 'react'
import DoneIcon from '@mui/icons-material/MoreVert'

export const BooleanFormat = ({ value }) => {
  return <Badge color="primary" badgeContent={value ? <DoneIcon /> : 'x'} />
}

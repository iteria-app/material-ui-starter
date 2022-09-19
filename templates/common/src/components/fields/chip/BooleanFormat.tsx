import Chip from '@mui/material/Chip'
import React from 'react'
import DoneIcon from '@mui/icons-material/MoreVert'

export const BooleanFormat = ({ value }) => {
  return <Chip label={value ? <DoneIcon /> : 'x'}  size="small" />
}

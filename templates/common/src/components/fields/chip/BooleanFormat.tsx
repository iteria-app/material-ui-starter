import React from 'react'
import DoneIcon from '@mui/icons-material/MoreVert'
import { Chip } from "@mui/material"

export const BooleanFormat = ({ value }: { value: boolean }) => {
  return <Chip label={value ? <DoneIcon /> : 'x'}  size="small" />
}

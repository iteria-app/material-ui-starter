import { Typography } from '@mui/material'
import React from 'react'

export const StringFormat = ({ value }: { value?: string }) => {
  return (
    <Typography>
      {value}
    </Typography>
  )
}

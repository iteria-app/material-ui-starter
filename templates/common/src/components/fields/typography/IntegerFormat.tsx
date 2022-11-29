import { Typography } from '@mui/material'
import React from 'react'

export const IntegerFormat = ({ value }: { value?: string | number }) => {
  return (
    <Typography>
      {value ?? ''}
    </Typography>
  )
}

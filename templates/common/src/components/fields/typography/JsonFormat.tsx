import { Typography } from "@mui/material"
import React from 'react'

export const JsonFormat = ({ value }: { value?: any }) => {
  return (
    <Typography fontSize={'14px'} fontWeight={400}>
      {JSON.stringify(value)}
    </Typography>
  )
}


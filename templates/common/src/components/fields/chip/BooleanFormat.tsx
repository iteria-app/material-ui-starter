import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { Chip } from '@mui/material'

export const BooleanFormat = ({ value }: { value?: boolean }) => {
  return (
    <Chip
      label={
        value ? (
          <CheckIcon fontSize={'small'} sx={{ paddingTop: '4px' }} />
        ) : (
          <CloseIcon fontSize={'small'} sx={{ paddingTop: '4px' }} />
        )
      }
      size="small"
    />
  )
}

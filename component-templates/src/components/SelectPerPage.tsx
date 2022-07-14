import React from 'react'
import { Box, MenuItem, Select } from '@mui/material'

export const SelectPerPage = (props: any) => {
  const { pageSize, handlePageSize } = props

  return (
    <Box textAlign={'center'} marginTop={'15px'}>
      <Select value={pageSize} onChange={handlePageSize}>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
    </Box>
  )
}

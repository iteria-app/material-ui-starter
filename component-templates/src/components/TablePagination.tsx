import React from 'react'
import { Box, Pagination } from '@mui/material'

export const TablePagination = (props: any) => {
  const { countRows, page, handlePage, siblingCount, hideNextButton } = props

  return (
    <Box margin={'auto'} width={'fit-content'}>
      <Pagination
        count={countRows}
        page={page}
        onChange={handlePage}
        boundaryCount={0}
        siblingCount={siblingCount}
        hideNextButton={hideNextButton}
        showFirstButton={true}
      />
    </Box>
  )
}

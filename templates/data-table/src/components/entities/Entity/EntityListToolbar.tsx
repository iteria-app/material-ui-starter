import { Translate } from '@iteria-app/component-templates'
import { Button, Grid, TextField, useTheme } from '@mui/material'
import React from 'react'

interface ToolbarProps {
  searchText: string
  setSearchText: any
}

export const EntityListToolbar = ({
  searchText,
  setSearchText,
}: ToolbarProps): JSX.Element => {
  return (
    <Grid
      container
      wrap={'nowrap'}
      justifyContent={'center'}
      style={{ padding: '16px 16px 0' }}
    >
      <Translate entityName={'Search...'}>
        {/* @ts-ignore*/}
        {(value) => (
          <TextField
            variant="outlined"
            value={searchText}
            onChange={(event: { target: { value: string } }) => {
              setSearchText(event.target.value)
            }}
            placeholder={value}
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-input': {
                fontWeight: 400,
                fontSize: '14px',
              },
            }}
          />
        )}
      </Translate>
      <Button sx={{ ml: '10px' }} color="primary" variant="contained">
        <Translate entityName={'Search'} />
      </Button>
    </Grid>
  )
}

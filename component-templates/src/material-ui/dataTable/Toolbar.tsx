import React from 'react'
import { Button, TextField, Grid } from '@mui/material'
import { IEntityTableProps } from '../listPage/ListPagePlaceholder'
import Translate from '../../i18n/Translate'
import { Add } from '@mui/icons-material'

interface ToolbarProps {
  props: IEntityTableProps
  searchText: string
  setSearchText: any
}

export const Toolbar = ({ props, searchText, setSearchText }: ToolbarProps) => {
  return (
    // @ts-ignore
    <Grid
      container
      wrap={'nowrap'}
      justifyContent={'center'}
      style={{ padding: '16px 16px 0' }}
    >
      {props.onClickCreate && (
        <Button
          startIcon={<Add />}
          color="primary"
          variant="contained"
          onClick={props.onClickCreate}
          sx={{ mr: '10px' }}
        >
          <Translate entityName={'Create'} />
        </Button>
      )}
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

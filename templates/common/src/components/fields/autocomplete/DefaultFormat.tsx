import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

type DefaultFormatProps = {
  value: string
  name: string
}

export const DefaultFormat = ({
  value,
  name,
}: DefaultFormatProps): JSX.Element => (
  <Autocomplete
    disablePortal
    options={[
      { label: 'First row', someField: 'first', anotherField: 'data1' },
      { label: 'Second row', someField: 'second', anotherField: 'data2' },
      { label: 'Third row', someField: 'third', anotherField: 'data3' },
    ]}
    getOptionLabel={(option) => option?.label}
    renderInput={(params) => <TextField {...params} label="Movie" />}
    onChange={(event, value) =>
      console.log('autocomplete onchange', value, event)
    }
  />
)

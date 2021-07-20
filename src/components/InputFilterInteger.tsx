import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputFilterInteger = (props) => {
  const { item, applyValue } = props;
  const handleFilterChange = (event) => {
      const inputTargetValue = event.target.value.replace(/[^0-9]/g, '')
      applyValue({ ...item, value: inputTargetValue })
  }

  const maxLength = () => {
      const columnField = columnFieldValue()
      if (columnField === 'bigInteger') {
          return 19
      }
      return 9
  }

  const columnFieldValue = () => {
      return item?.columnField
  }

  return (
      <TextField
          label='Number'
          type='tel'
          value={item?.value || ''}
          inputProps={{ maxLength: maxLength() }}
          onChange={handleFilterChange}
      />
  )
};

export default InputFilterInteger;
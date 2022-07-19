import React from 'react'
import TextField from '@mui/material/TextField'

const InputFilterInteger = (props: any) => {
  const { item, applyValue } = props

  const handleFilterChange = (event: any) => {
    const inputTargetValue: string = event.target.value.replace(/[^0-9]/g, '')
    applyValue({ ...item, value: inputTargetValue })
  }

  const columnStates = props?.apiRef?.current?.state
  const columns = columnStates?.columns?.lookup

  const columnFieldValue = (): string => {
    return item?.columnField
  }

  const columnTypeFromGraphQl = () => {
    const columnFieldName = columnFieldValue()
    return columns[columnFieldName].columnType
  }

  const maxLength = (): number => {
    const columnType: string = columnTypeFromGraphQl()
    if (columnType === 'Int') {
      return 9
    }
    return 19
  }

  return (
    <TextField
      label="Number"
      type="tel"
      value={item?.value || ''}
      inputProps={{ maxLength: maxLength() }}
      onChange={handleFilterChange}
    />
  )
}

export default InputFilterInteger

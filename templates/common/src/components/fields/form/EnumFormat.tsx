import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { MenuItem, Select } from '@mui/material'

type EnumFormatProps = {
  value: string
  name: string
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export const EnumFormat = ({
  value,
  name,
  onBlur,
}: EnumFormatProps): JSX.Element => {
  return (
    <Select
      name={name}
      onBlur={onBlur}
      onClick={(event) => {
        event.stopPropagation()
      }}
      fullWidth={true}
      value={value ?? ''}
    >
      {introspection?.__schema?.types
        ?.find(
          (type) =>
            type?.name ===
            entityIntrospection.find((field) => field?.name === 'Entity')?.type
              ?.name
        )
        ?.enumValues.map((field) => (
          <MenuItem value={field?.name} key={field?.name}>
            {field?.name}
          </MenuItem>
        ))}
    </Select>
  )
}

import React from 'react'
import { Input } from '@mui/material'
import { Field as FormikField } from 'formik'

export const JsonFormat = ({ value, relationshipName, index }) => {
  return (
    <FormikField
      name={
        relationshipName
          ? index !== undefined
            ? `${relationshipName}[${index}].${'FIELD'}`
            : `${relationshipName}.${'FIELD'}`
          : 'FIELD'
      }
    >
      {({ field }: any) => {
        return (
          <Input {...field} fullWidth={true} value={JSON.stringify(field.value) ?? ''}></Input>
        )
      }}
    </FormikField>
  )
}

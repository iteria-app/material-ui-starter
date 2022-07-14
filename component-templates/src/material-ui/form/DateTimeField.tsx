import React from 'react'
import { TextField } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider, DateTimePicker } from '@mui/lab'
import { FastField as FormikField, useField } from 'formik'
import { Field } from '../../gql'

interface IFieldProps {
  entityName: string
  entityField: Field
  name: string
  value: string
}

export const DateTimeField: React.FC<IFieldProps> = ({
  entityName,
  entityField,
  name,
  value,
}: IFieldProps): JSX.Element => {
  const inputProps = {
    fullWidth: true,
    name: name,
    type: entityField.type,
    value: value,
    required: entityField.required,
    error: !value && entityField.required,
  }

  return (
    <FormikField
      name={name}
      component={({ field, form, meta }: any) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => (
                <TextField {...inputProps} {...props} /*{...field}*/ />
              )}
              label={entityField.name}
              value={value}
              onChange={(newValue) => {
                console.log('DateTimePicker.onChange', newValue, name)

                // helpers.setValue(newValue, false)
                // form.setFieldValue(name, newValue, false);
                // setValue(newValue)
              }}
              onAccept={(newValue) => {
                console.log('DateTimePicker.onAccept', newValue, name)

                // helpers.setValue(newValue, false)
                // form.setFieldValue(name, newValue, false);
                // setValue(newValue)
              }}
            />
          </LocalizationProvider>
        )
      }}
    >
      {/* {({ field }: any) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => (
                <TextField fullWidth {...props} {...field} />
              )}
              label="DateTimePicker"
              value={value}
              onChange={(newValue) => {
                console.log('DateTimePicker.onChange', newValue)

                // setValue(newValue)
              }}
            />
          </LocalizationProvider>
        )
      }} */}
    </FormikField>
  )
}

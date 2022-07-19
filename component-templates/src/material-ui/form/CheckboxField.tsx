import React from 'react'
import {
  Checkbox as CheckboxInput,
  FormControlLabel,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'
import { Field as FormikField } from 'formik'
import { Field } from '../../gql'

interface ICheckboxFieldProps {
  entityName: string
  entityField: Field
  name: string
  value: boolean
  label?: string | JSX.Element
  index?: number
}

export const CheckboxField: React.FC<ICheckboxFieldProps> = ({
  entityName,
  entityField,
  name,
  value,
  label,
  index,
}: ICheckboxFieldProps): JSX.Element => {
  const inputProps = {
    checked: value,
    disabled: entityField.disabled,
  }

  const even = index ? index % 2 == 0 : false

  return (
    // @ts-ignore
    <FormikField name={name}>
      {({ field }: any) => {
        return (
          <TableRow
            key={'rowname'}
            sx={{
              'td, th': {
                border: 'none',
                whiteSpace: 'break-spaces',
                background: (even || index == 0) && '#F2F3F4',
              },
              '& .MuiTableCell-root:first-of-type': {
                borderTopLeftRadius: '8px',
                borderBottomLeftRadius: '8px',
              },

              '& .MuiTableCell-root:last-child': {
                borderTopRightRadius: '8px',
                borderBottomRightRadius: '8px',
              },
            }}
          >
            {label && (
              <TableCell sx={{ width: '100%', padding: '5px 16px' }}>
                <Typography fontSize={'14px'}>{label}</Typography>
              </TableCell>
            )}
            <TableCell
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                width: '100%',
                textAlign: 'left',
                padding: '4px 16px',
              }}
            >
              <CheckboxInput {...inputProps} {...field} />
            </TableCell>
          </TableRow>
        )
      }}
    </FormikField>
  )
}

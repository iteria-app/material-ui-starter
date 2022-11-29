import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import {
  InputLabel,
  TableCell,
  TableRow,
  Input,
  Checkbox as CheckboxInput,
} from '@mui/material'
import {
  Formik,
  useFormikContext,
  Field as FormikField,
  FieldProps,
} from 'formik'
import {
  getRelationshipField,
  Translate,
  columnCount,
} from '@iteria-app/component-templates'
interface IProps {
  relationshipName?: string
  index?: number
}
const CustomersForm: React.FC<IProps> = ({ relationshipName }) => {
  const { setFieldValue } = useFormikContext()
  const columns = [
    <TableRow
      key="firstName"
      sx={{
        '& td, & th': {
          border: 'none',
          whiteSpace: 'break-spaces',
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
      <TableCell sx={{ width: '50%', padding: '14.5px 14px' }}>
        <InputLabel>
          <Translate
            entityName="customers"
            fieldName={getRelationshipField('firstName')}
            defaultMessage="FirstName"
          />
        </InputLabel>
      </TableCell>
      <TableCell
        sx={{
          width: '50%',
          textAlign: 'left',
          padding: '8px 16px',
        }}
      >
        <FormikField
          name={
            relationshipName
              ? `${relationshipName}.${'firstName'}`
              : 'firstName'
          }
        >
          {(fieldProps: FieldProps) => {
            return (
              <Input
                name={
                  relationshipName
                    ? `${relationshipName}.${'firstName'}`
                    : 'firstName'
                }
                onChange={fieldProps.field.onChange}
                onBlur={fieldProps.field.onBlur}
                onClick={(event) => {
                  event.stopPropagation()
                }}
                fullWidth
                value={fieldProps.field.value ?? ''}
              />
            )
          }}
        </FormikField>
      </TableCell>
    </TableRow>,
    <TableRow
      key="lastName"
      sx={{
        '& td, & th': {
          border: 'none',
          whiteSpace: 'break-spaces',
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
      <TableCell sx={{ width: '50%', padding: '14.5px 14px' }}>
        <InputLabel>
          <Translate
            entityName="customers"
            fieldName={getRelationshipField('lastName')}
            defaultMessage="LastName"
          />
        </InputLabel>
      </TableCell>
      <TableCell
        sx={{
          width: '50%',
          textAlign: 'left',
          padding: '8px 16px',
        }}
      >
        <FormikField
          name={
            relationshipName ? `${relationshipName}.${'lastName'}` : 'lastName'
          }
        >
          {(fieldProps: FieldProps) => {
            return (
              <Input
                name={
                  relationshipName
                    ? `${relationshipName}.${'lastName'}`
                    : 'lastName'
                }
                onChange={fieldProps.field.onChange}
                onBlur={fieldProps.field.onBlur}
                onClick={(event) => {
                  event.stopPropagation()
                }}
                fullWidth
                value={fieldProps.field.value ?? ''}
              />
            )
          }}
        </FormikField>
      </TableCell>
    </TableRow>,
    <TableRow
      key="phone"
      sx={{
        '& td, & th': {
          border: 'none',
          whiteSpace: 'break-spaces',
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
      <TableCell sx={{ width: '50%', padding: '14.5px 14px' }}>
        <InputLabel>
          <Translate
            entityName="customers"
            fieldName={getRelationshipField('phone')}
            defaultMessage="Phone"
          />
        </InputLabel>
      </TableCell>
      <TableCell
        sx={{
          width: '50%',
          textAlign: 'left',
          padding: '8px 16px',
        }}
      >
        <FormikField
          name={relationshipName ? `${relationshipName}.${'phone'}` : 'phone'}
        >
          {(fieldProps: FieldProps) => {
            return (
              <Input
                name={
                  relationshipName ? `${relationshipName}.${'phone'}` : 'phone'
                }
                onChange={fieldProps.field.onChange}
                onBlur={fieldProps.field.onBlur}
                onClick={(event) => {
                  event.stopPropagation()
                }}
                fullWidth
                value={fieldProps.field.value ?? ''}
              />
            )
          }}
        </FormikField>
      </TableCell>
    </TableRow>,
    <TableRow
      key="vip"
      sx={{
        '& td, & th': {
          border: 'none',
          whiteSpace: 'break-spaces',
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
      <TableCell sx={{ width: '50%', padding: '14.5px 14px' }}>
        <InputLabel>
          <Translate
            entityName="customers"
            fieldName={getRelationshipField('vip')}
            defaultMessage="Vip"
          />
        </InputLabel>
      </TableCell>
      <TableCell
        sx={{
          width: '50%',
          textAlign: 'left',
          padding: '8px 16px',
        }}
      >
        <FormikField
          name={relationshipName ? `${relationshipName}.${'vip'}` : 'vip'}
        >
          {(fieldProps: FieldProps) => {
            return (
              <CheckboxInput
                name={relationshipName ? `${relationshipName}.${'vip'}` : 'vip'}
                onChange={fieldProps.field.onChange}
                checked={fieldProps.field.value}
              />
            )
          }}
        </FormikField>
      </TableCell>
    </TableRow>,
  ]
  return <>{columns.map((field) => field)}</>
}
export default CustomersForm

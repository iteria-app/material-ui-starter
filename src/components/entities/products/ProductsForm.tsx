import React, { ChangeEventHandler, FocusEventHandler } from 'react'
import { InputLabel, TableCell, TableRow, Input } from '@mui/material'
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
const ProductsForm: React.FC<IProps> = ({ relationshipName }) => {
  const { setFieldValue } = useFormikContext()
  const columns = [
    <TableRow
      key="name"
      sx={{
        'td, th': {
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
            entityName="products"
            fieldName={getRelationshipField('name')}
            defaultMessage="Name"
          />
        </InputLabel>
      </TableCell>
      <TableCell
        sx={{
          fontWeight: 400,
          fontSize: '14px',
          width: '50%',
          textAlign: 'left',
          padding: '8px 16px',
        }}
      >
        <FormikField
          name={relationshipName ? `${relationshipName}.${'name'}` : 'name'}
        >
          {(fieldProps: FieldProps) => {
            return (
              <Input
                name={
                  relationshipName ? `${relationshipName}.${'name'}` : 'name'
                }
                onChange={fieldProps.field.onChange}
                onBlur={fieldProps.field.onBlur}
                onClick={(event) => {
                  event.stopPropagation()
                }}
                fullWidth={true}
                value={fieldProps.field.value ?? ''}
              />
            )
          }}
        </FormikField>
      </TableCell>
    </TableRow>,
  ]
  return <>{columns.map((field) => field)}</>
}
export default ProductsForm

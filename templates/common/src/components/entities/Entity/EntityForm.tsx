import React from 'react'
import { InputLabel, TableCell, TableRow } from '@mui/material'
import { Formik, useFormikContext } from 'formik' // Formik import required for react generator
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/form/FormatEntityField'
import {
  getRelationshipField,
  Translate,
} from '@iteria-app/component-templates'

interface IProps {
  relationshipName?: string
  index?: number
}

const EntityForm: React.FC<IProps> = ({ relationshipName }) => {
  const { setFieldValue } = useFormikContext()
  const columns = [
    <TableRow
      key={'FIELD'}
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
          {' '}
          <Translate
            entityName={'Entity'}
            fieldName={getRelationshipField('FIELD')}
            defaultMessage={'HEADER_NAME'}
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
        <FormatEntityField
          type={'string'}
          setFieldValue={setFieldValue}
          relationshipName={relationshipName}
          index={undefined}
        />
      </TableCell>
    </TableRow>,
  ]

  return <>{columns.map((field) => field)}</>
}

export default EntityForm

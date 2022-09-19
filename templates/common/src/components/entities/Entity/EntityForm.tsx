import React from 'react'
import { Button, InputLabel, TableCell, TableRow } from '@mui/material'
import { LookupDialog } from '../LookupDialog'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/formik/FormatEntityField'
import { Search } from '@mui/icons-material'
import EntityDataTableContainer from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableContainer'
import EntityDataTableView from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableView'
import { useFormikContext } from 'formik'
import { FormCard } from '../FormCard'

interface IProps {
  relationshipName?: string,
  index?: number
}

const EntityForm: React.FC<IProps> = ({ relationshipName }) => {
  const { setFieldValue } = useFormikContext()

  const fields = [
    <TableRow
      key={'FIELD'}
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
    <TableCell
      sx={{ width: '50%', padding: '14.5px 14px' }}
    >
      <InputLabel>HEADER_NAME</InputLabel>
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
        <FormatEntityField type={'string'} setFieldValue={setFieldValue} />
      </TableCell>
    </TableRow>
  ]

  return (
    <FormCard title={relationshipName ?? 'Entity'}>
      {fields.map((field) => field)}
      <TableRow>
        <TableCell>
          {
            relationshipName &&
            <LookupDialog
              Container={EntityDataTableContainer}
              View={EntityDataTableView}
              onClickRow={(row) => {
                setFieldValue(relationshipName, row, false)
              }}
            >
              <Button
                color="secondary"
                variant="contained"
                startIcon={<Search />}
                style={{ margin: '16px' }}
              >
                Lookup
              </Button>
            </LookupDialog>
          }
        </TableCell>
      </TableRow>
    </FormCard>
  )
}

export default EntityForm

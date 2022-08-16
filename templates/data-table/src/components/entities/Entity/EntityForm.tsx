import React from 'react'
import { Button, Grid, InputLabel } from '@mui/material'
import FormatEntityField from '@iteria-app/component-templates/src/components/entity/list/FormatEntityField'
import { Search } from '@mui/icons-material'
import { LookupDialog } from '../LookupDialog'
import EntityListContainer from '../Entity/EntityListContainer'
import EntityDataTableView from '../Entity/EntityDataTableView'
import { useFormikContext } from 'formik'

interface IProps {
  relationshipName: string
}

const EntityForm: React.FC<IProps> = ({ relationshipName }) => {
  const { setFieldValue } = useFormikContext()

  const fields = [
    <Grid key={'FIELD'} item md={6} xs={12}>
      <InputLabel>HEADER_NAME</InputLabel>
      <FormatEntityField index={undefined} />
    </Grid>,
  ]

  return (
    <>
      {fields.map((field) => field)}
      <LookupDialog
        Container={EntityListContainer}
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
    </>
  )
}

export default EntityForm

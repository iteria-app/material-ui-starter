import React from 'react'
import EntityListItem from '../Entity/EntityListItem'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'
import { Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'
import { LookupDialog } from '@iteria-app-mui/common/src/components/entities/LookupDialog'
import EntityDataTableContainer from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableContainer'
import EntityDataTableView from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableView'

interface ObjectFormatProps {
  value: EntityFragment
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const ObjectFormat = ({ value, setFieldValue }: ObjectFormatProps) => {
  return (
    <FormCard title={'FIELD'}>
      <EntityListItem data={value} relationshipName={'FIELD'} />
      <LookupDialog
        Container={EntityDataTableContainer}
        View={EntityDataTableView}
        onClickRow={(row) => {
          setFieldValue('FIELD', row, false)
        }}
        title={'FIELD'}
      >
        <Button
          color="secondary"
          variant="contained"
          startIcon={<Search />}
          style={{ margin: '16px' }}
        >
          <Translate
            entityName={'FIELD'}
            fieldName={'lookup'}
            defaultMessage={`Lookup ${'FIELD'}`}
          />
        </Button>
      </LookupDialog>
    </FormCard>
  )
}

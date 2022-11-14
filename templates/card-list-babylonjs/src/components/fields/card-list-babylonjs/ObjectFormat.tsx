import React from 'react'
import EntityBabylonView from '../Entity/EntityBabylonView'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'
import EntityDataTableContainer from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableContainer'
import EntityDataTableView from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableView'
import { Search } from '@mui/icons-material'
import { Translate } from '@iteria-app/component-templates'
import { LookupDialog } from '@iteria-app-mui/common/src/components/entities/LookupDialog'

interface ObjectFormatProps {
  value: EntityFragment
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const ObjectFormat = ({ value, setFieldValue }: ObjectFormatProps) => {
  return (
    <FormCard title={'FIELD'}>
      <EntityBabylonView data={value} />
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

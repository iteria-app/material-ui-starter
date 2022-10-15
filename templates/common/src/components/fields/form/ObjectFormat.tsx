import React from 'react'
import { Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import EntityForm from '../../entities/Entity/EntityForm'
import { LookupDialog } from '@iteria-app-mui/common/src/components/entities/LookupDialog'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import EntityDataTableContainer from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableContainer'
import EntityDataTableView from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableView'
import { Translate } from '@iteria-app/component-templates'

type ObjectFormatProps = {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}

export const ObjectFormat = ({
  setFieldValue,
}: ObjectFormatProps): JSX.Element => (
  <FormCard title={'FIELD' ?? 'Entity'}>
    <EntityForm relationshipName={'FIELD'} />
    {'FIELD' && (
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
    )}
  </FormCard>
)

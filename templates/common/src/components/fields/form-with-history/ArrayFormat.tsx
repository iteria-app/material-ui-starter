import React from 'react'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import EntityDataTableGridViewForForm from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableGridViewForForm'
import EntityFormList from '../Entity/EntityFormList'
import { LookupDialog } from '@iteria-app-mui/common/src/components/entities/LookupDialog'
import { EntityFragment } from '../../../generated/graphql'
import { findByPeriod, Translate } from '@iteria-app/component-templates'
import { Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import { AccordionCard } from '@iteria-app-mui/common/src/components/entities/AccordionCard'

interface ArrayFormatProps {
  value: EntityFragment[]
  length: number
}

export const ArrayFormat = ({ value, length }: ArrayFormatProps) => {
  return (
    <FormCard title={'FIELD'} length={length}>
      <LookupDialog
        data={value}
        View={EntityDataTableGridViewForForm}
        title={'FIELD'}
        relationshipName={'FIELD'}
      >
        <Button
          color="secondary"
          variant="contained"
          startIcon={<Search />}
          style={{ margin: '16px' }}
        >
          <Translate
            entityName={'Entity'}
            fieldName={`${'FIELD'}.edit`}
            defaultMessage={`History ${'FIELD'}`}
          />
        </Button>
      </LookupDialog>
      <EntityFormList
        data={[findByPeriod(value)]}
        relationshipName={'FIELD'}
        index={index}
      />
    </FormCard>
  )
}

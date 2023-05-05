import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
import EntityForm from '../../entities/Entity/EntityForm'

import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import EntityDataTableContainerForForm from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableContainerForForm'
import { guessAutocompleteOption } from '@iteria-app/component-templates'
import { AccordionCard } from '@iteria-app-mui/common/src/components/entities/AccordionCard'

type ObjectFormatProps = {
  setFieldValue: (field: string, value: any) => void
}

export const ObjectFormat = ({
  setFieldValue,
}: ObjectFormatProps): JSX.Element => (
  <FormCard title={'FIELD' ?? 'Entity'}>
    <EntityForm relationshipName={'FIELD'} />
    {'FIELD' && (
      <EntityDataTableContainerForForm
        View={(data, filterProps) => (
          <Autocomplete
            disablePortal
            loading={data?.loading}
            options={data?.data?.Entity ?? []}
            getOptionLabel={(option) =>
              option?.[guessAutocompleteOption(option)]
            }
            renderInput={(params) => <TextField {...params} label="Entity" />}
            onChange={(event, val) => {
              setFieldValue('FIELD', val)
            }}
          />
        )}
      />
    )}
  </FormCard>
)

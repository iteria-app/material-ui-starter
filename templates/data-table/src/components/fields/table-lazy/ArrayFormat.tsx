import React from 'react'
import EntityDataTableContainerForForm from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableContainerForForm'
import EntityDataTableGridViewForForm from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableGridViewForForm'
import EntityFilter from '@iteria-app-mui/common/src/components/entities/Entity/EntityFilter'
import { Box } from '@mui/material'
import { FormCard } from '@iteria-app-mui/common/src/components/entities/FormCard'
import { EntityFragment } from '../../../generated/graphql'
import { FilterDataStorage } from '@iteria-app/component-templates'

interface ArrayFormatProps {
  value: EntityFragment[]
  length: number
}

export const ArrayFormat = ({ value, length }: ArrayFormatProps) => {
  return (
    <FormCard title={'FIELD'} length={12}>
      <EntityDataTableContainerForForm
        View={({ data, error, loading, onClickRow, filterProps }) => (
          <>
            <Box>
              <EntityDataTableGridViewForForm
                data={data?.Entity}
                filterProps={filterProps}
                onClickRow={onClickRow}
                loading={loading}
                error={error}
              >
                <EntityFilter
                  filterCallbacks={filterProps}
                  dataStorage={FilterDataStorage.LOCAL_STATE}
                />
              </EntityDataTableGridViewForForm>
            </Box>
          </>
        )}
      />
    </FormCard>
  )
}

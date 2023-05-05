import React from 'react'
import EntityFilter from '@iteria-app-mui/common/src/components/entities/Entity/EntityFilter'
import EntityDataTableContainerForForm from '../../components/entities/Entity/EntityDataTableContainerForForm'
import EntityDataTableGridViewForForm from '../../components/entities/Entity/EntityDataTableGridViewForForm'
import {
  FilterDataStorage,
  FilterDrawer,
} from '@iteria-app/component-templates'
import { Box } from '@mui/material'

const EntityManyPage: React.FC = () => {
  return (
    <EntityDataTableContainerForForm
      View={({ data, error, loading, onClickRow, filterProps }) => (
        <>
          <Box>
            <FilterDrawer>
              <EntityFilter
                filterCallbacks={filterProps}
                dataStorage={FilterDataStorage.QUERY_PARAMETERS}
              />
            </FilterDrawer>
            <EntityDataTableGridViewForForm
              data={data?.Entity}
              filterProps={filterProps}
              onClickRow={onClickRow}
              loading={loading}
              error={error}
            />
          </Box>
        </>
      )}
    />
  )
}
export default EntityManyPage

export const INDEX_ROUTE = 'data-table'

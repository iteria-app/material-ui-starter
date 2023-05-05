import EntityFilter from '@iteria-app-mui/common/src/components/entities/Entity/EntityFilter'
import { FilterDrawer } from '@iteria-app/component-templates'
import React from 'react'
import EntityAgGridContainer from '../../components/entities/Entity/EntityAgGridContainer'
import EntityAgGridView from '../../components/entities/Entity/EntityAgGridView'

const EntityManyPage: React.FC = () => {
  return (
    <EntityAgGridContainer
      View={({ data, error, loading, onClickRow, filterProps }) => (
        <>
          <FilterDrawer>
            <EntityFilter filterCallbacks={filterProps} />
          </FilterDrawer>
          <EntityAgGridView
            data={data}
            filterProps={filterProps}
            onClickRow={onClickRow}
            loading={loading}
            error={error}
          />
        </>
      )}
    />
  )
}

export default EntityManyPage

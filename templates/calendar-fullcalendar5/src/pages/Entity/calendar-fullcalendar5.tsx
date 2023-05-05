import React from 'react'
import EntityFullcalendar from '../../components/entities/Entity/EntityFullcalendar'
import EntityListContainer from '@iteria-app-mui/common/src/components/entities/Entity/EntityListContainer'
import { FilterDrawer } from '@iteria-app/component-templates'
import EntityFilter from '@iteria-app-mui/common/src/components/entities/Entity/EntityFilter'

const EntityManyPage: React.FC = () => {
  return (
    <EntityListContainer
      View={({ data, filterProps }) => (
        <>
          <FilterDrawer>
            <EntityFilter filterCallbacks={filterProps} />
          </FilterDrawer>
          <EntityFullcalendar data={data} filterProps={filterProps} />
        </>
      )}
    />
  )
}

export default EntityManyPage

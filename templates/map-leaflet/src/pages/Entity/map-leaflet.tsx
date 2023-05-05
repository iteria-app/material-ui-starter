import React from 'react'
import EntityMapView from '../../components/entities/Entity/EntityMapView'
import EntityMapContainer from '../../components/entities/Entity/EntityMapContainer'
import 'leaflet/dist/leaflet.css'
import { FilterDrawer } from '@iteria-app/component-templates'
import EntityFilter from '@iteria-app-mui/common/src/components/entities/Entity/EntityFilter'

const EntityManyPage: React.FC = () => {
  return (
    <EntityMapContainer
      View={({ data, filterProps }) => (
        <>
          <FilterDrawer>
            <EntityFilter filterCallbacks={filterProps} />
          </FilterDrawer>
          <EntityMapView data={data} filterProps={filterProps} />
        </>
      )}
    />
  )
}

export default EntityManyPage

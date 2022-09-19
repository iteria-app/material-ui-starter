import React from 'react'
import EntityMapView from '../../components/entities/Entity/EntityMapView'
import EntityMapContainer from '../../components/entities/Entity/EntityMapContainer'
import 'leaflet/dist/leaflet.css'

const EntityManyPage: React.FC = () => {
  return (
    <EntityMapContainer
      View={({ data, filterProps }) => (
        <EntityMapView
          data={data}
          filterProps={filterProps}
        />
      )}
    />
  )
}

export default EntityManyPage

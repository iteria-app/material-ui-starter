import React from 'react'
import EntityListView from '../../components/entities/Entity/EntityListView'
import EntityListContainer from '../../components/entities/Entity/EntityListContainer'

const EntityManyPage: React.FC = () => {
  return (
    <EntityListContainer
      View={({ data }) => (
        <EntityListView
          data={data}
        />
      )}
    />
  )
}

export default EntityManyPage

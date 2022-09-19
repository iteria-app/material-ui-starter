import React from 'react'
import EntityCardListView from '../../components/entities/Entity/EntityCardListView'
import EntityCardListContainer from '../../components/entities/Entity/EntityCardListContainer'

const EntityManyPage: React.FC = () => {
  return (
    <EntityCardListContainer
      View={({ data }) => (
        <EntityCardListView data={data} />
      )}
    />
  )
}

export default EntityManyPage

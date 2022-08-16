import React from 'react'
import EntityCardListView from '../../components/entities/Entity/EntityCardListView'
import EntityListContainer from '../../components/entities/Entity/EntityListContainer'

const EntityManyPage: React.FC = () => {
  return (
    <EntityListContainer
      View={({ data }) => (
        <EntityCardListView data={data} loading={data?.loading} />
      )}
    />
  )
}

export default EntityManyPage

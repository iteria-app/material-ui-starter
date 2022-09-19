import React from 'react'
import EntityCardBarGraph from '../../components/entities/Entity/EntityBarGraphView'
import EntityListContainer from '../../components/entities/Entity/EntityListContainer'

const EntityFormPage: React.FC = () => {
  return (
    <EntityListContainer
      View={({ data, filterProps }) => (
        <EntityCardBarGraph
          data={data?.data}
          loading={data?.loading}
          error={data?.error}
          {...filterProps}
        />
      )}
    />
  )
}

export default EntityFormPage

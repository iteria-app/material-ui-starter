import React from 'react'
import EntityBarGraphView from '../../components/entities/Entity/EntityBarGraphView'
import EntityListContainer from '../../components/entities/Entity/EntityListContainer'

const EntityFormPage: React.FC = () => {
  return (
    <EntityListContainer
      View={({ data, error, loading, filterProps }) => (
        <EntityBarGraphView
          data={data}
          loading={loading}
          error={error}
          {...filterProps}
        />
      )}
    />
  )
}

export default EntityFormPage

export const INDEX_ROUTE = 'graphs-chartsjs'

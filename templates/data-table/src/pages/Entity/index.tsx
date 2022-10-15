import React from 'react'
import EntityDataTableContainer from '../../components/entities/Entity/EntityDataTableContainer'
import EntityDataTableView from '../../components/entities/Entity/EntityDataTableView'

const EntityManyPage: React.FC = () => {
  return (
    <EntityDataTableContainer
      View={({ data, error, loading, onClickRow, filterProps }) => {
        return (
          <EntityDataTableView
            data={data}
            filterProps={filterProps}
            onClickRow={onClickRow}
            loading={loading}
            error={error}
          />
        )
      }}
    />
  )
}

export default EntityManyPage

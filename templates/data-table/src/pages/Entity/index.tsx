import React from 'react'
import EntityDataTableView from '../../components/entities/Entity/EntityDataTableView'
import EntityDataTableContainer from '../../components/entities/Entity/EntityDataTableContainer'

const EntityManyPage: React.FC = () => {
  return (
    <EntityDataTableContainer
      View={({ data, onClickRow, filterProps }) => {
        return (
          <EntityDataTableView
            data={data}
            filterProps={filterProps}
            onClickRow={onClickRow}
            loading={data?.loading}
            error={data?.error}
          />
        )
      }}
    />
  )
}

export default EntityManyPage

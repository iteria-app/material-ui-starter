import React from 'react'
import EntityDataTableView from '../../components/entities/Entity/EntityDataTableView'
import EntityListContainer from '../../components/entities/Entity/EntityListContainer'
import { useNavigate } from 'react-router-dom'

const EntityManyPage: React.FC = () => {
  return (
    <EntityListContainer
      View={({ data, onClickRow, filterProps }) => {
        return (
          <EntityDataTableView
            data={data}
            loading={data?.loading}
            error={data?.error}
            topBar
            onClickRow={onClickRow}
            {...filterProps}
          />
        )
      }}
    />
  )
}

export default EntityManyPage

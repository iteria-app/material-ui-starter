import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDataContext } from '../../gql/GrapqhQLDataProvider'
import { EntityListContainer } from './EntityListContainer'

interface EntityListPageProps {
  entity: string
}

export const EntityListPageEditable: React.FC<EntityListPageProps> = (
  props
) => {
  const navigate = useNavigate()
  const { upsert } = useDataContext(props.entity)

  return (
    <EntityListContainer
      entity={props.entity}
      onClickRow={(props) => {
        return navigate(props.id.toString())
      }}
      onDeleteRow={(value) => {
        upsert(value)
      }}
      onClickCreate={() => {
        navigate('create')
      }}
    />
  )
}

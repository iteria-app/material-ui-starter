import React from 'react'
import { useNavigate } from 'react-router-dom'
import { EntityListContainer } from './EntityListContainer'

interface EntityListPageProps {
  entity: string
}

export const EntityListPageReadOnly: React.FC<EntityListPageProps> = (
  props
) => {
  const navigate = useNavigate()

  return (
    <EntityListContainer
      entity={props.entity}
      onClickRow={(props) => {
        return navigate(props.id.toString())
      }}
      onClickCreate={() => {
        navigate('create')
      }}
    />
  )
}

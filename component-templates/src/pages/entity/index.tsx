import React from 'react'
import { useNavigate } from 'react-router-dom'

import { EntityListContainer } from '../../components/entity/EntityListContainer'

export const EntityListPage: React.FC = () => {
  let navigate = useNavigate()
  return (
    <EntityListContainer
      entity="pracovnik"
      onClickRow={(props) => {
        return navigate(props.id.toString())
      }}
    />
  )
}

export * from './[id]'

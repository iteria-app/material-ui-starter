import React, { useContext } from 'react'
import { DataContext } from '../../gql/GrapqhQLDataProvider'
import { EntityListPageEditable } from './EntityListPageEditable'
import { EntityListPageReadOnly } from './EntityListPageReadOnly'

interface EntityListPageProps {
  entity: string
}

export const EntityListPage: React.FC<EntityListPageProps> = (props) => {
  const dataContext = useContext(DataContext)

  if (dataContext.isReadOnly(props.entity) == false)
    return <EntityListPageReadOnly entity={props.entity} />
  else return <EntityListPageEditable entity={props.entity} />
}

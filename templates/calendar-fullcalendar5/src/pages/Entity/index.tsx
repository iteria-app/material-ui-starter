import React from 'react'
import EntityFullcalendar from '../../components/entities/Entity/EntityFullcalendar'
import EntityListContainer from '@iteria-app-mui/common/src/components/entities/Entity/EntityListContainer'

const EntityManyPage: React.FC = () => {
  return (
    <EntityListContainer
      View={({ data, filterProps }) => (
        <EntityFullcalendar
          data={data}
          filterProps={filterProps}
        />
      )}
    />
  )
}

export default EntityManyPage

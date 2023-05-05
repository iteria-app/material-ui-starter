import React from 'react'
import EntityFormView from '@iteria-app-mui/common/src/components/entities/Entity/EntityFormView'
import EntityCreateContainer from '@iteria-app-mui/common/src/components/entities/Entity/EntityCreateContainer'

const EntityCreatePage: React.FC = () => {
  return (
    <EntityCreateContainer
      View={({ data, onSubmit }) => (
        <EntityFormView data={data} onSubmit={onSubmit} />
      )}
    />
  )
}

export default EntityCreatePage

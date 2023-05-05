import React from 'react'
import EntityCreateFormView from '@iteria-app-mui/common/src/components/entities/Entity/EntityCreateFormView'
import EntityCreateContainer from '@iteria-app-mui/common/src/components/entities/Entity/EntityCreateContainer'

const EntityCreatePage: React.FC = () => {
  return (
    <EntityCreateContainer
      View={({ data, onSubmit }) => (
        <>
          <EntityCreateFormView data={data} onSubmit={onSubmit} />
        </>
      )}
    />
  )
}

export default EntityCreatePage

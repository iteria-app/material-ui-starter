import React from 'react'
import EntityBabylonView from '../../components/entities/Entity/EntityBabylonView'
import EntityBabylonContainer from '../../components/entities/Entity/EntityBabylonContainer'

const EntityFormPage: React.FC = () => {
  return (
    <EntityBabylonContainer
      View={({ data, onSubmit, onCopy }) => (
        <EntityBabylonView data={data} onSubmit={onSubmit} onCopy={onCopy} />
      )}
    />
  )
}

export default EntityFormPage

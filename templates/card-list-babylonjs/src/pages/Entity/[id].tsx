import React from 'react'
import EntityBabylonView from '../../components/entities/Entity/EntityBabylonView'
import EntityFormContainer from '../../components/entities/Entity/EntityFormContainer'

const EntityFormPage: React.FC = () => {
  return (
    <EntityFormContainer
      View={({ data, onSubmit, onCopy }) => (
        <EntityBabylonView data={data} onSubmit={onSubmit} onCopy={onCopy} />
      )}
    />
  )
}

export default EntityFormPage

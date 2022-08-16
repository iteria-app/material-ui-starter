import React from 'react'
import EntityFormContainer from '../../components/entities/Entity/EntityFormContainer'
import EntityFormView from '../../components/entities/Entity/EntityFormView'

const EntityFormPage: React.FC = () => {
  return (
    <EntityFormContainer
      View={({ data, onSubmit, onCopy }) => (
        <EntityFormView data={data} onSubmit={onSubmit} onCopy={onCopy} />
      )}
    />
  )
}

export default EntityFormPage

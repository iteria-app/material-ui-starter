import React from 'react'
import EntityFormView from '../../components/entities/Entity/EntityFormView'
import EntityFormContainer from '../../components/entities/Entity/EntityFormContainer'

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

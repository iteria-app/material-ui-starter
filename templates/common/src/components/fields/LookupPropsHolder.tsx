import React from 'react'
import EntityDataTableContainerForForm from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableContainerForForm'
import EntityDataTableGridViewForForm from '@iteria-app-mui/data-table/src/components/entities/Entity/EntityDataTableGridViewForForm'

export const LookupPropsHolder = () => (
  <LookupDialog
    Container={EntityDataTableContainerForForm}
    View={EntityDataTableGridViewForForm}
  />
)

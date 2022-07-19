import { Entity } from '@iteria-app/component-templates-api/src/entity'
import { FormikValues } from 'formik'
import * as React from 'react'
import { EntityForm } from './EntityForm'

export interface IDetailPageProps {
  data: any
  entityFields: Entity
  onSubmit: (values: FormikValues) => void
  onCopy?: (values: any) => void
  saveButtonDisabled?: boolean
}

export const DetailPagePlaceholder: React.FC<IDetailPageProps> = (
  props: IDetailPageProps
) => {
  return <EntityForm {...props} />
}

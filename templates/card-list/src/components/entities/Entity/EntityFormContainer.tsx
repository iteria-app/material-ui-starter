import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useEntityByIdQuery,
  useInsertEntityMutation,
} from '../../../generated/graphql'
import {
  deepClone,
  Error,
  ErrorBoundary,
  Fetching,
  QueryBoundary,
  showErrorSnackbar,
  showSuccessSnackbar,
} from '@iteria-app/component-templates'
import { FormikValues } from 'formik'
import { getUpsertQuery } from '@iteria-app/graphql-lowcode'

import * as generatedGraphql from '../../../generated/graphql'

interface IViewProps {
  data: any
  onSubmit: (values: FormikValues) => void
  onCopy: (values: FormikValues) => void
}

interface EntityFormContainerProps {
  View: React.FC<IViewProps>
}

const EntityFormContainer: React.FC<EntityFormContainerProps> = ({ View }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [insertedData, insertMutation] = useInsertEntityMutation()

  const [data] =
    id === 'create'
      ? [{ fetching: false, error: null, data: {} }]
      : useEntityByIdQuery({
          variables: { id },
        })

  const handleSubmit = (values: FormikValues) => {
    insertMutation(getUpsertQuery(values, generatedGraphql)).then(
      (response) => {
        if (response.error) {
          showErrorSnackbar('Submit failed!')
          console.error('Submit error:', response.error)
        } else {
          showSuccessSnackbar('Submit successful')
        }

        const newId =
          response.data?.[`${Object.keys(response.data)[0]}`]?.returning?.[0]
            ?.id

        if (newId) {
          navigate(-1)
        }
      }
    )
  }

  const handleCopy = (values: FormikValues) => {
    handleSubmit(deepClone(values))
  }

  if (data?.fetching) return <Fetching />
  if (data?.error) return <Error error={data?.error} />

  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <View data={data?.data} onSubmit={handleSubmit} onCopy={handleCopy} />
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityFormContainer

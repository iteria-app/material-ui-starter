import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  useEntityByIdQuery,
  useInsertEntityMutation,
} from '../../../generated/graphql'
import {
  createEmptyObject,
  deepClone,
  Error,
  ErrorBoundary,
  Fetching,
  parseRequestErrors,
  QueryBoundary,
  showErrorSnackbar,
  showLoadingSnackbar,
  showSuccessSnackbar,
} from '@iteria-app/component-templates'
import { Formik, FormikHelpers, FormikValues } from 'formik'
import { getUpsertQuery } from '@iteria-app/graphql-lowcode'
import { useIntl } from 'react-intl'

import * as generatedGraphql from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'

interface IViewProps {
  data: generatedGraphql.EntityQuery
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  onCopy: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
}

interface EntityFormContainerProps {
  View: React.FC<IViewProps>
}

const EntityFormContainer: React.FC<EntityFormContainerProps> = ({ View }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const intl = useIntl()

  const [insertedData, insertMutation] = useInsertEntityMutation()

  let data
  if (id !== 'create') {
    ;[data] = useEntityByIdQuery({
      variables: { EntityId: id },
    })
  }

  const handleSubmit = (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    formikHelpers.setSubmitting(true)
    showLoadingSnackbar(
      intl.formatMessage({
        id: 'submit.inprogress',
        defaultMessage: 'Submitting...',
      })
    )
    insertMutation(getUpsertQuery(values, generatedGraphql)).then(
      (response) => {
        if (response.error) {
          showErrorSnackbar(
            intl.formatMessage({
              id: 'submit.failed',
              defaultMessage: 'Submit failed: ',
            }) + parseRequestErrors(response.error.message, intl)
          )
          console.error('Submit error:', response.error)
        } else {
          showSuccessSnackbar(
            intl.formatMessage({
              id: 'submit.successful',
              defaultMessage: 'Submit successful',
            })
          )
        }
        formikHelpers.setSubmitting(false)

        const newId =
          response.data?.[`${Object.keys(response.data)[0]}`]?.returning?.[0]
            ?.id

        if (newId) {
          navigate(-1)
        }
      }
    )
  }

  const handleCopy = (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    handleSubmit(deepClone(values), formikHelpers)
  }

  if (data?.fetching) return <Fetching />
  if (data?.error) return <Error error={data?.error} />

  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <Formik
          initialValues={
            data?.data ??
            createEmptyObject('ROOT_NAME', generatedGraphql, introspection)
          }
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <View data={data?.data} onSubmit={handleSubmit} onCopy={handleCopy} />
        </Formik>
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityFormContainer

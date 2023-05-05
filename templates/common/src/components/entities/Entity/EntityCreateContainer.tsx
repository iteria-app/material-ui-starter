import React from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import {
  useEntityByIdQuery,
  useInsertEntityMutation,
} from '../../../generated/graphql'
import {
  createEmptyObject,
  Error,
  ErrorBoundary,
  Fetching,
  parseRequestErrors,
  QueryBoundary,
  showErrorSnackbar,
  showLoadingSnackbar,
  showSuccessSnackbar,
  useFilter,
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
}

interface EntityFormContainerProps {
  View: React.FC<IViewProps>
}

const EntityCreateContainer: React.FC<EntityFormContainerProps> = ({
  View,
}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const intl = useIntl()
  const [searchParams] = useSearchParams()
  const filterProps = useFilter(searchParams, 'Entity')

  const [insertedData, insertMutation] = useInsertEntityMutation()

  let data
  if (filterProps?.id)
    [data] = useEntityByIdQuery({
      variables: { EntityId: filterProps?.id },
    })
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

  if (data?.fetching) return <Fetching />
  if (data?.error) return <Error error={data?.error} />

  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <Formik
          initialValues={
            data?.data ??
            createEmptyObject('customer', generatedGraphql, introspection)
          }
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <View data={data?.data} onSubmit={handleSubmit} />
        </Formik>
      </QueryBoundary>
    </ErrorBoundary>
  )
}

export default EntityCreateContainer

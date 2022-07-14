import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FormikValues } from 'formik'
import {
  Fetching,
  Error,
  showLoadingSnackbar,
  showErrorSnackbar,
  showSuccessSnackbar,
  parseRequestErrors,
} from '../../material-ui'
import { EntityForm } from '../../material-ui/entityForm/EntityForm'
import { useDataContext } from '../../gql/GrapqhQLDataProvider'
import {
  deepClone,
  Field,
  fillFlatEntityFieldValueObject,
  generateEntityFieldValueObject,
} from '../../gql'
import { ErrorWithCode } from '@iteria-app/component-templates-api/src/ErrorWithCode'
import { ErrorBoundary } from '../../../material-ui'
import { QueryBoundary } from '../QueryBoundary'
import { Translate } from '../../i18n'
import { useIntl } from 'react-intl'
import { Box, CircularProgress, Grid } from '@mui/material'

interface EntityDetailContainerProps {
  entity: string
}

export const EntityDetailContainer: React.FC<EntityDetailContainerProps> = (
  props
) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const intl = useIntl()
  const { getOne, upsert, upsertDisabled } = useDataContext(props.entity)

  const result = getOne({
    variables: { id },
  })

  const handleSubmit = (values: FormikValues) => {
    showLoadingSnackbar(
      intl.formatMessage({
        id: 'snackbarSubmitting',
        defaultMessage: 'Submitting...',
      })
    )
    if (upsertDisabled)
      throw new ErrorWithCode(
        `Upserting is disabled for the entity:"${props.entity}"`,
        'ERR_UPSERT_DISABLED'
      )
    const eF: Field = {
      name: props.entity,
      type: 'array',
      entityFields: result?.entityFields,
    }

    const newItem = {
      ...fillFlatEntityFieldValueObject(
        generateEntityFieldValueObject(eF, 0),
        values
      ),
      id: values.id,
    }
    if (values.isDeleted) newItem.isDeleted = values?.isDeleted
    upsert(newItem).then((response) => {
      if (response.error) {
        showErrorSnackbar(
          intl.formatMessage({
            id: 'snackbarSubmitFailed',
            defaultMessage: 'Submit failed: ',
          }) + parseRequestErrors(response.error.message, intl)
        )
        console.error('Submit error:', response.error)
      } else {
        showSuccessSnackbar(
          intl.formatMessage({
            id: 'snackbarSubmitOk',
            defaultMessage: 'Submit successful',
          })
        )

        const newId =
          response.data?.[`${Object.keys(response.data)[0]}`]?.returning?.[0]
            ?.id

        if (newId) {
          navigate(-1)
        }
      }
    })
  }

  const handleCopy = (values: FormikValues) => {
    handleSubmit(deepClone(values))
  }

  if (result.fetching)
    return (
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          width: '100%',
          height: '70vh',
        }}
      >
        <CircularProgress />
      </Grid>
    )
  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={result}>
        <EntityForm
          data={result?.data}
          entityFields={result?.entityFields}
          onSubmit={handleSubmit}
          onCopy={handleCopy}
          saveButtonDisabled={upsertDisabled}
        />
      </QueryBoundary>
    </ErrorBoundary>
  )
}

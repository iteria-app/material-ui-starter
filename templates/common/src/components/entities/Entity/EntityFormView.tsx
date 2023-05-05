import React from 'react'
import { FormikHelpers, FormikValues, useFormikContext } from 'formik'
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material'
import { FileCopy, Save } from '@mui/icons-material'
import {
  createEmptyObject,
  filterByTabName,
  FilterDataStorage,
  getTabNameFromIndex,
  handleOnChange,
  Translate,
  useFilter,
} from '@iteria-app/component-templates'
import { LoadingButton } from '@mui/lab'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/form/FormatEntityField'
import * as generatedGraphql from '../../../generated/graphql'

interface Props {
  data?: generatedGraphql.EntityQuery
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  onCopy?: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void
  saveButtonDisabled?: boolean
}

const EntityFormView: React.FC<Props> = ({
  data,
  onSubmit,
  onCopy,
  saveButtonDisabled,
}) => {
  const formikProps = useFormikContext()
  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <Typography variant="h1" align="center">
        <Translate
          entityName={'Entity'}
          fieldName="heading"
          defaultMessage={'Entity'}
        />
      </Typography>
      <Typography align="center">
        <Translate
          entityName={'Entity'}
          fieldName="message"
          defaultMessage={'Edit this text using the translate tool'}
        />
      </Typography>
      <Box sx={{ marginY: 2 }}>
        <CardContent>
          <form onSubmit={formikProps.handleSubmit}>
            <Grid container spacing={3}>
              <FormatEntityField
                relationshipName={undefined}
                rootName={'ROOT_NAME'}
                index={undefined}
                setFieldValue={formikProps?.setFieldValue}
                onTabsChanged={(e, newValue, allData) =>
                  filterByTabName(
                    'type',
                    getTabNameFromIndex(allData ?? {}, newValue),
                    filterProps ?? useFilter()
                  )
                }
              />
            </Grid>
            <CardActions>
              <LoadingButton
                disabled={saveButtonDisabled}
                loading={formikProps.isSubmitting}
                loadingPosition="start"
                startIcon={<Save />}
                style={{
                  margin: '12px auto',
                }}
                variant="contained"
                type="submit"
                data-test-id="save-entity-button"
              >
                <Translate entityName={'Save'} />
              </LoadingButton>
              {onCopy !== undefined && (
                <LoadingButton
                  disabled={saveButtonDisabled}
                  color="secondary"
                  loading={formikProps.isSubmitting}
                  loadingPosition="start"
                  startIcon={<FileCopy />}
                  style={{
                    margin: '12px auto',
                  }}
                  variant="contained"
                  onClick={() => {
                    if (onCopy) {
                      onCopy(data as FormikValues, formikProps)
                    }
                  }}
                  data-test-id="copy-entity-button"
                >
                  <Translate entityName={'Copy'} />
                </LoadingButton>
              )}
            </CardActions>
          </form>
        </CardContent>
      </Box>
    </div>
  )
}

export default EntityFormView

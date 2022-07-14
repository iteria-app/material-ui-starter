import React from 'react'
import { Formik, FastField as FormikField, FormikValues } from 'formik'
import { useNavigate } from 'react-router-dom'
import { Box, Button, CardActions, CardContent, Grid, Input, InputLabel } from '@mui/material'
import { ArrowBack, FileCopy, Save } from '@mui/icons-material'
import { createEmptyObject, Translate, lowerFirstLetter} from '@iteria-app/component-templates'
import { LoadingButton } from '@mui/lab'
import EntityFormCard from './EntityFormCard'
import FormatEntityField from '../list/FormatEntityField'

import * as generatedGraphql from '../../generated/graphql'
import introspection from '../../generated/introspect.json'

const SMALL_CARD = 6
const BIG_CARD = 12
let saveLoading = false
let copyLoading = false

interface Props {
  data?: any
  onSubmit: (values: FormikValues) => void
  onCopy?: (values: any) => void
  saveButtonDisabled?: boolean
}

const EntityFormView: React.FC<Props> = ({data, onSubmit, onCopy, saveButtonDisabled}) => {
  data = data ?? createEmptyObject('Entity', generatedGraphql, introspection)

  const navigate = useNavigate()

  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <Button onClick={() => navigate('/test/' + lowerFirstLetter('Entity'))}>
        <ArrowBack />
        <Translate entityName={'Back'} />
      </Button>
      <Box sx={{ marginY: 2 }}>
        <CardContent>
          <Formik
            initialValues={data}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {(formikProps) => (
              <form onSubmit={formikProps.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid
                    item
                    md={
                      formikProps.initialValues.length > SMALL_CARD + 1
                        ? BIG_CARD
                        : SMALL_CARD
                    }
                  >
                    <EntityFormCard title={'Entity'}>
                      <Grid item md={6} xs={12}>
                        <FormatEntityField
                          value={'FIELD'}
                          type='string'
                          label={'HEADER_NAME'} 
                        />
                      </Grid>
                    </EntityFormCard >
                  </Grid>
                </Grid>
                <CardActions>
                  <LoadingButton
                    disabled={saveButtonDisabled}
                    loading={saveLoading}
                    loadingPosition="start"
                    startIcon={<Save />}
                    style={{
                      margin: '12px auto',
                    }}
                    variant="contained"
                    type="submit"
                    onClick={() => {
                      saveLoading = true
                      setTimeout(() => (saveLoading = false), 750)
                    }}
                  >
                    <Translate entityName={'Save'} />
                  </LoadingButton>
                  {onCopy !== undefined && (
                    <LoadingButton
                      disabled={saveButtonDisabled}
                      color="secondary"
                      loading={copyLoading}
                      loadingPosition="start"
                      startIcon={<FileCopy />}
                      style={{
                        margin: '12px auto',
                      }}
                      variant="contained"
                      onClick={() => {
                        copyLoading = true
                        setTimeout(() => (copyLoading = false), 750)
                        if (onCopy) {
                          onCopy(data)
                        }
                      }}
                    >
                      <Translate entityName={'Copy'} />
                    </LoadingButton>
                  )}
                </CardActions>
              </form>
            )}
          </Formik>
        </CardContent>
      </Box>
    </div>
  )

}

export default EntityFormView 
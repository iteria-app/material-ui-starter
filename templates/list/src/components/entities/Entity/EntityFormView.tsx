import React from 'react'
import { Formik, Field as FormikField, FormikValues } from 'formik'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Input,
  InputLabel,
  TableCell,
  TableRow,
} from '@mui/material'
import { ArrowBack, FileCopy, Save } from '@mui/icons-material'
import {
  createEmptyObject,
  Translate,
  lowerFirstLetter,
} from '@iteria-app/component-templates'
import { LoadingButton } from '@mui/lab'
import FormCard from '../FormCard'

import * as generatedGraphql from '../../../generated/graphql'
import introspection from '../../../generated/introspect.json'
import FormatEntityField from '@iteria-app/component-templates/src/components/entity/list/FormatEntityField'

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

const EntityFormView: React.FC<Props> = ({
  data,
  onSubmit,
  onCopy,
  saveButtonDisabled,
}) => {
  data =
    data?.EntityById ??
    createEmptyObject('Entity', generatedGraphql, introspection)

  const navigate = useNavigate()

  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <Button onClick={() => navigate('/test/Entity/')}>
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
                    <FormCard title={'Entity'}>
                      <TableRow
                        key={'rowname'}
                        sx={{
                          'td, th': {
                            border: 'none',
                            whiteSpace: 'break-spaces',
                          },
                          '& .MuiTableCell-root:first-of-type': {
                            borderTopLeftRadius: '8px',
                            borderBottomLeftRadius: '8px',
                          },

                          '& .MuiTableCell-root:last-child': {
                            borderTopRightRadius: '8px',
                            borderBottomRightRadius: '8px',
                          },
                        }}
                      >
                        <TableCell
                          sx={{ width: '50%', padding: '14.5px 14px' }}
                        >
                          <InputLabel>HEADER_NAME</InputLabel>
                        </TableCell>
                        <TableCell
                          sx={{
                            fontWeight: 400,
                            fontSize: '14px',
                            width: '50%',
                            textAlign: 'left',
                            padding: '8px 16px',
                          }}
                        >
                          <FormatEntityField
                            relationshipName={undefined}
                            setFieldValue={formikProps.setFieldValue}
                          />
                        </TableCell>
                      </TableRow>
                    </FormCard>
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

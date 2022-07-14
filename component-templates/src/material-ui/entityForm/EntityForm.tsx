import * as React from 'react'
import {
  Card,
  CardContent,
  Grid,
  Button,
  CardActions,
  Box,
  IconButton,
  Divider,
} from '@mui/material'
import {
  ArrowBack,
  Delete,
  ContentCopy,
  Save,
  Search,
  Undo,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Formik, FormikProps, FormikValues } from 'formik'
import { IDetailPageProps } from './EntityFormPlaceholder'
import { getVisibleFields } from '../../gql'
import { formInput } from '../formatting'
import Translate from '../../i18n/Translate'
import { EntityCard } from './EntityCard'
import { EntityListDialog } from '../dialog/EntityListDialog'
import {
  Field,
  findPathRoot,
} from '@iteria-app/component-templates/src/gql/entity'
import { stringPrettyCapitalize } from '../formatting'
import { LoadingButton } from '@mui/lab'
import { DragDropForm, isFilePath } from './DragDropForm'
import { DragDropModelForm, isGlbPath } from './DragDropModelForm'
import { DragDropImageForm, isImagePath } from './DragDropImageForm'
import { isPath } from './../dataTable/FormEntityTable'
import { DeleteModal } from '../../../material-ui'

const SMALL_CARD = 6
const BIG_CARD = 12

const findNested = (entityField: Field): number =>
  entityField.entityFields?.fields?.length ?? 1

const calculateVisibleFields = (visibleFields: Field[]) =>
  visibleFields
    .filter((field: Field): boolean => field.type !== 'array')
    .map((entityField: Field): number => findNested(entityField))
    .reduce((previous: number, next: number): number => previous + next)

export const getInputLabel = (
  entityName: string,
  fieldName: string
): JSX.Element => {
  return (
    <Translate
      entityName={entityName}
      fieldName={fieldName}
      defaultMessage={stringPrettyCapitalize(fieldName)}
    />
  )
}

export const formInputWrapper = ({
  entityName,
  entityField,
  value,
  label,
  formikProps,
  index,
}: {
  entityName: string
  entityField: Field
  value: any
  label?: JSX.Element | ((entityName: string, fieldName: string) => JSX.Element)
  formikProps: FormikProps<FormikValues>
  index?: number
}) => {
  return formInput({
    entityName: entityName,
    entityField: entityField,
    name: entityField.name,
    value: value,
    label: label || getInputLabel,
    formikProps,
    index,
    render: ({ entityField, children }) => {
      return <>{children}</>
    },
  })

  return entityField.type === 'array' ? (
    <Grid item xs={8}>
      {input}
    </Grid>
  ) : (
    <>{input}</>
  )
}

export const EntityForm: React.FC<IDetailPageProps> = (
  props: IDetailPageProps
) => {
  const isSafari = () => {
    return navigator.userAgent.indexOf('Safari') < 0
  }
  const navigate = useNavigate()
  const visibleFields = getVisibleFields(props.entityFields)
  const [open, setOpen] = React.useState(false)
  const fields = (formikProps: FormikProps<FormikValues>) => {
    let fieldIndex = 0
    let entityFieldIndex = 1
    return (
      <>
        <Grid container justifyContent={'space-between'}>
          <Grid
            item
            padding={'25px'}
            md={
              calculateVisibleFields(visibleFields) > SMALL_CARD + 1
                ? SMALL_CARD //TODO: change to big
                : SMALL_CARD
            }
          >
            <EntityCard title={props.entityFields.name}>
              {visibleFields
                .filter(
                  (field) => field.type !== 'array' && field.type !== 'object'
                )
                .map((entityField: Field): JSX.Element => {
                  return formInputWrapper({
                    entityName: props.entityFields.name,
                    entityField,
                    value: formikProps.values[`${entityField.name}`],
                    index: fieldIndex++,
                    formikProps: formikProps,
                  })
                })}
            </EntityCard>
          </Grid>

          {visibleFields
            .filter(
              (field) =>
                (field.type === 'array' || field.type === 'object') &&
                !isPath(field?.entityFields?.fields)
            )
            .map((entityField) => {
              return (
                <Grid
                  item
                  padding={'32px'}
                  md={
                    findNested(entityField) > SMALL_CARD - 3
                      ? BIG_CARD
                      : SMALL_CARD
                  }
                >
                  <EntityCard
                    title={entityField.name}
                    action={
                      entityField.type === 'object' ? (
                        <EntityListDialog
                          entityField={entityField}
                          onClickRow={(entity) => {
                            formikProps.setFieldValue(
                              entityField.name,
                              entity,
                              false
                            )
                          }}
                        >
                          <Button
                            variant="contained"
                            startIcon={<Search />}
                            style={{ margin: '16px 0' }}
                          >
                            Lookup
                          </Button>
                        </EntityListDialog>
                      ) : undefined
                    }
                  >
                    {formInputWrapper({
                      entityName: props.entityFields.name,
                      entityField,
                      value: formikProps.values[`${entityField.name}`],
                      label: getInputLabel,
                      index: entityFieldIndex,
                      formikProps: formikProps,
                    })}
                  </EntityCard>
                </Grid>
              )
            })}
          <Grid item md={SMALL_CARD}>
            {props.entityFields.fields
              .filter((field) => isImagePath(field) !== '')
              .map((entityField: Field): JSX.Element => {
                return (
                  <DragDropImageForm
                    props={props}
                    formikProps={formikProps}
                    entityField={entityField}
                  />
                )
              })}
          </Grid>

          <Grid item md={BIG_CARD}>
            {props.entityFields.fields
              .filter((field) => isFilePath(field?.entityFields?.fields) !== '')
              .map((entityField: Field): JSX.Element => {
                return (
                  <DragDropForm
                    props={props}
                    formikProps={formikProps}
                    entityField={entityField}
                  />
                )
              })}
          </Grid>
          <Grid item md={BIG_CARD}>
            {props.entityFields.fields
              .filter((field) => isGlbPath(field?.entityFields?.fields))
              .map((entityField: Field): JSX.Element => {
                return (
                  <DragDropModelForm
                    props={props}
                    formikProps={formikProps}
                    entityField={entityField}
                  />
                )
              })}
          </Grid>
        </Grid>
        <Divider sx={{ marginY: '20px' }} />
      </>
    )
  }
  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <Button
        onClick={() => {
          navigate(
            findPathRoot(props.entityFields?.name) +
              '/' +
              props.entityFields?.name
          )
        }}
      >
        <ArrowBack />
        <Translate entityName={'Back'} />
      </Button>
      <Box sx={{ marginY: 2 }}>
        <Card>
          <CardContent>
            <Formik
              initialValues={props.data}
              onSubmit={props.onSubmit}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {(formikProps) => (
                <form onSubmit={formikProps.handleSubmit}>
                  {fields(formikProps)}
                  <CardActions>
                    <LoadingButton
                      disabled={props.saveButtonDisabled}
                      loadingPosition="start"
                      startIcon={<Save />}
                      style={{
                        margin: '12px auto',
                      }}
                      variant="contained"
                      onMouseUp={() => {
                        formikProps.handleSubmit()
                      }}
                    >
                      <Translate entityName={'Save'} />
                    </LoadingButton>
                    <LoadingButton
                      disabled={
                        props.saveButtonDisabled ||
                        formikProps.values.isDeleted == null
                      }
                      loadingPosition="start"
                      startIcon={
                        formikProps.values.isDeleted ? <Undo /> : <Delete />
                      }
                      style={{
                        margin: '12px auto',
                      }}
                      variant="contained"
                      onMouseUp={() => {
                        if (formikProps.values.isDeleted) {
                          formikProps.setFieldValue('isDeleted', false)
                          formikProps.handleSubmit()
                        } else {
                          setOpen(true)
                        }
                      }}
                    >
                      <Translate
                        entityName={
                          formikProps.values.isDeleted ? 'Restore' : 'Delete'
                        }
                      />
                    </LoadingButton>
                    {props.onCopy !== undefined && (
                      <LoadingButton
                        disabled={props.saveButtonDisabled}
                        color="primary"
                        loadingPosition="start"
                        startIcon={<ContentCopy />}
                        style={{
                          margin: '12px auto',
                        }}
                        variant="contained"
                        onMouseUp={() => {
                          if (props.onCopy) {
                            props.onCopy(props.data)
                          }
                        }}
                      >
                        <Translate entityName={'Copy'} />
                      </LoadingButton>
                    )}
                  </CardActions>
                  <DeleteModal
                    open={open}
                    handleClose={() => setOpen(false)}
                    handleDelete={() => {
                      setOpen(false)
                      formikProps.setFieldValue('isDeleted', true)
                      formikProps.handleSubmit()
                    }}
                    value={formikProps?.values?.name ?? formikProps?.values?.id}
                  />
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}

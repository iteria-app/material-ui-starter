import React from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  TableFooter,
  Button,
} from '@mui/material'
import { Delete, Undo, ContentCopy } from '@mui/icons-material'
import { FieldArray, FieldArrayRenderProps } from 'formik'
import {
  Field,
  getVisibleFields,
  guessEntityDeleteField,
  generateEntityFieldValueObject,
  isDeleted,
  setDeleted,
  deepClone,
  fillFlatEntityFieldValueObject,
} from '../../gql'
import { EntityListDialog, FieldItem, ModelView } from '../../../material-ui'
import Translate from '../../i18n/Translate'
import { stringPrettyCapitalize } from '../formatting'
import { FileDownloadTableCell } from './FileDownloadTableCell'
import { isFilePath } from '../entityForm/DragDropForm'
import { getDownloadUrls } from '@iteria-app/s3-graphql-client/src/components/uppy/uppy'
import { useClient } from 'urql'
import {
  getExtensionsFromEntityFields,
  isGlbPath,
} from './../entityForm/DragDropModelForm'
import { GlbModelDownloadTableCell } from './GlbModelDownloadTableCell'
import { FormikProps, FormikValues } from 'formik'
import { Entity } from '@iteria-app/component-templates-api'

interface IFormEntityTableProps {
  name?: string
  data: any
  entityField: Field
  formikProps: FormikProps<FormikValues>
}
type Maybe<T> = T | null

const getDeepVisibleFields = (entityFields: Field): Array<any> => {
  let result: any = []

  getVisibleFields(entityFields.entityFields).forEach((field) => {
    field.columnName = entityFields.name
    result =
      field.type === 'object'
        ? [...result, ...getDeepVisibleFields(field)]
        : [...result, field]
  })

  return result
}

export const isPath = (fields: any) => {
  if (fields) {
    const filePath = fields.filter((field: { name: string }) =>
      field.name.match(/.*Path$/i)
    )
    if (filePath.length > 0) return filePath
  }
}

export const FormEntityTable: React.FC<IFormEntityTableProps> = ({
  name,
  data,
  entityField,
  formikProps,
}: IFormEntityTableProps) => {
  const fieldName = name || entityField.name
  const visibleFields = getVisibleFields(entityField.entityFields)
  const deepVisibleFields = getDeepVisibleFields(entityField)
  const [signedUrls, setSignedUrls] = React.useState<Maybe<string>[]>([''])
  const [rowClickDisabled, setRowClickDisabled] = React.useState<Boolean>(false)

  let filePaths = ['']
  filePaths.pop()
  data?.map((item: any, index: number) => {
    return isPath(entityField?.entityFields?.fields)?.map((field: any) => {
      if (item[field?.name] && !filePaths.includes(item[field?.name]))
        filePaths.push(item[field?.name])
    })
  })

  getDownloadUrls(useClient(), filePaths).then((promise) => {
    setSignedUrls(promise.urls)
  })

  const acceptedExtensions = getExtensionsFromEntityFields(
    entityField.entityFields?.fields
  ).filter((extension: any) => {
    if (!['file', 'thumbnail', 'glb'].includes(extension?.[1].toLowerCase()))
      return extension
  })

  return (
    <FieldArray
      name={fieldName}
      render={(arrayHelpers: FieldArrayRenderProps) => {
        const tableCellStyle = { borderBottom: 0, paddingBottom: 0 }
        const entityDeleteField = entityField.entityFields
          ? guessEntityDeleteField(entityField.entityFields)
          : undefined

        return (
          <>
            <TableContainer>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {deepVisibleFields.map((field) => {
                      return (
                        <TableCell>
                          <Translate
                            entityName={field.columnName}
                            fieldName={field.name}
                            defaultMessage={stringPrettyCapitalize(field.name)}
                          />
                        </TableCell>
                      )
                    })}
                    {entityDeleteField && <TableCell />}
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((item: any, index: number) => {
                    const itemDeleted = entityDeleteField
                      ? isDeleted(entityDeleteField, item)
                      : false
                    return (
                      <TableRow>
                        {visibleFields.map((field) => {
                          return (
                            <FieldItem
                              name={`${fieldName}.${index}.${field.name}`}
                              value={item?.[field.name]}
                              entityName={entityField.name}
                              entityField={field}
                              render={({ entityField, children }) => (
                                <TableCell
                                  style={
                                    itemDeleted
                                      ? { ...tableCellStyle, opacity: 0.3 }
                                      : tableCellStyle
                                  }
                                >
                                  {children}
                                </TableCell>
                              )}
                              formikProps={formikProps}
                            />
                          )
                        })}
                        {entityDeleteField && (
                          <TableCell
                            padding="none"
                            style={{ ...tableCellStyle, width: 50 }}
                          >
                            <IconButton
                              color="primary"
                              onClick={() => {
                                arrayHelpers.replace(
                                  index,
                                  setDeleted(
                                    entityDeleteField,
                                    item,
                                    !itemDeleted
                                  )
                                )
                              }}
                            >
                              {itemDeleted ? <Undo /> : <Delete />}
                            </IconButton>
                          </TableCell>
                        )}
                        {isFilePath(entityField?.entityFields?.fields) !==
                          '' && (
                          <FileDownloadTableCell
                            tableCellStyle={tableCellStyle}
                            filePath={
                              signedUrls &&
                              signedUrls.find(
                                (url) =>
                                  url &&
                                  url.includes(
                                    item[
                                      isFilePath(
                                        entityField?.entityFields?.fields
                                      )
                                    ]
                                  )
                              )
                            }
                            fileName={item.name}
                          />
                        )}
                        {/* <GlbModelDownloadTableCell
                          tableCellStyle={tableCellStyle}
                          item={item}
                          fields={entityField?.entityFields?.fields}
                          signedUrls={signedUrls}
                        /> */}
                        {acceptedExtensions.map((ext: any) => {
                          return (
                            item[ext?.[0]] && (
                              <FileDownloadTableCell
                                tableCellStyle={tableCellStyle}
                                filePath={
                                  signedUrls &&
                                  signedUrls.find(
                                    (url) => url && url.includes(item[ext?.[0]])
                                  )
                                }
                                fileName={item.name.concat(`.${ext?.[1]}`)}
                              />
                            )
                          )
                        })}
                        {!isPath(entityField?.entityFields?.fields) && (
                          <TableCell
                            padding="none"
                            style={{ ...tableCellStyle, width: 50 }}
                          >
                            <IconButton
                              color="primary"
                              onClick={() => arrayHelpers.push(deepClone(item))}
                            >
                              {<ContentCopy />}
                            </IconButton>
                          </TableCell>
                        )}
                      </TableRow>
                    )
                  })}
                </TableBody>
                <TableFooter>
                  {!isPath(entityField?.entityFields?.fields) &&
                    isChildObject(entityField?.entityFields) && (
                      <EntityListDialog
                        entityField={entityField}
                        setRowClickDisabled={setRowClickDisabled}
                        onClickRow={(entity) => {
                          if (!rowClickDisabled.valueOf()) {
                            setRowClickDisabled(true)
                            if (entity.__typename) {
                              const newItem = {
                                ...fillFlatEntityFieldValueObject(
                                  generateEntityFieldValueObject(
                                    entityField,
                                    0
                                  ),
                                  entity
                                ),
                              }
                              arrayHelpers.push(newItem)
                            }
                          }
                        }}
                      >
                        <Button
                          style={{
                            margin: '12px',
                            float: 'left',
                          }}
                          variant="contained"
                          color="primary"
                        >
                          <Translate entityName={'Add element'} />
                        </Button>
                      </EntityListDialog>
                    )}
                  {!isPath(entityField?.entityFields?.fields) &&
                    !isChildObject(entityField?.entityFields) && (
                      <Button
                        style={{
                          margin: '12px',
                          float: 'left',
                        }}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          arrayHelpers.push(
                            generateEntityFieldValueObject(entityField, 0)
                          )
                        }}
                      >
                        <Translate entityName={'Add new element'} />
                      </Button>
                    )}
                </TableFooter>
              </Table>
            </TableContainer>
          </>
        )
      }}
    ></FieldArray>
  )
}

const isChildObject = (entityFields?: Entity) => {
  return entityFields?.fields.some((field) => {
    if (field.type === 'object') return true
  })
}

import { Grid } from '@mui/material'
import { DragDrop, StatusBar } from '@uppy/react'
import { getUppy } from '@iteria-app/s3-graphql-client/src/components/uppy/uppy'
import React, { useEffect } from 'react'
import { useClient } from 'urql'
import { EntityCard } from './EntityCard'
import { v4 as uuidv4 } from 'uuid'
import { IDetailPageProps } from './EntityFormPlaceholder'
import { FormikProps, FormikValues } from 'formik'
import { Field } from 'gql/entity'
import { formInputWrapper, getInputLabel } from './EntityForm'
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
import '@uppy/status-bar/dist/style.css'

interface IDragDropFormProps {
  props: IDetailPageProps
  formikProps: FormikProps<FormikValues>
  entityField: Field
}

const BIG_CARD = 12

export const isFilePath = (fields: any): string => {
  if (fields) {
    const filePath = fields.find((field: { name: string }) =>
      field.name.match(/.*filePath$/i)
    ) //This can change according to further convention
    if (filePath && filePath.name) return filePath.name
  }
  return ''
}

export const DragDropForm: React.FC<IDragDropFormProps> = ({
  props,
  formikProps,
  entityField,
}) => {
  const [uppy] = React.useState(getUppy(useClient(), null))

  useEffect(() => {
    uppy.on('file-added', (file) => {
      file.name = `${props.entityFields.name}/${uuidv4()}_attachment_${
        file.name
      }`
    })

    uppy.on('upload-success', (file, response) => {
      const fileProp = {
        filePath: file.name,
        name: file.data.name,
      }
      const key = props?.entityFields?.fields.filter(
        (field) => isFilePath(field?.entityFields?.fields) !== ''
      )
      props.data[key[0].name].push(fileProp)
      formikProps.setFieldValue(key[0].name, props.data[key[0].name])
    })
  }, [uppy])

  return (
    <Grid item md={BIG_CARD}>
      <EntityCard title={'Attachments'}>
        {formInputWrapper({
          entityName: props.entityFields.name,
          entityField,
          value: formikProps.values[`${entityField.name}`],
          label: getInputLabel,
          formikProps: formikProps,
        })}
        <Grid item xs={BIG_CARD}>
          <DragDrop
            id="dragDropAttachments"
            uppy={uppy}
            locale={{
              strings: {
                dropHereOr: 'Drop attachments here or %{browse}',
                browse: 'browse',
              },
            }}
          />
          <div
            className="progress"
            style={{ paddingTop: 20, paddingBottom: 20 }}
          >
            <StatusBar
              uppy={uppy}
              hideUploadButton={false}
              id="statusBar"
              hideAfterFinish={true}
              hidePauseResumeButton={true}
              showProgressDetails={true}
            />
          </div>
        </Grid>
      </EntityCard>
    </Grid>
  )
}

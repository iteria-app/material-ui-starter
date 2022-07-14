import { Grid } from '@mui/material'
import { DragDrop, StatusBar } from '@uppy/react'
import {
  getUppy,
  getDownloadUrl,
} from '@iteria-app/s3-graphql-client/src/components/uppy/uppy'
import React, { useEffect } from 'react'
import { useClient } from 'urql'
import { EntityCard } from './EntityCard'
import { v4 as uuidv4 } from 'uuid'
import { IDetailPageProps } from './EntityFormPlaceholder'
import { FormikProps, FormikValues } from 'formik'
import { Field } from 'gql/entity'
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
import '@uppy/status-bar/dist/style.css'

interface IDragDropImageFormProps {
  props: IDetailPageProps
  formikProps: FormikProps<FormikValues>
  entityField: Field
}

const BIG_CARD = 12
const SMALL_CARD = 6

export const isImagePath = (field: Field): string => {
  if (field.name.match(/.*thumbnailPath$/i)) return field.name
  if (field.name.match(/.*logoPath$/i)) return field.name
  if (field.name.match(/.*ImgPath$/i)) return field.name
  return ''
}

export const DragDropImageForm: React.FC<IDragDropImageFormProps> = ({
  props,
  formikProps,
  entityField,
}) => {
  const [signedSource, setSignedSource] = React.useState('')
  const [uppy] = React.useState(getUppy(useClient(), ['image/*']))
  //const key = isThumbnailPath(props?.entityFields?.fields) //THIS SHOULD find the right key, not always for thumbnail but for logo and minimap too
  const key = entityField.name
  useEffect(() => {
    uppy.on('file-added', (file) => {
      file.name = `${props.entityFields.name}/${uuidv4()}_thumbnail_${
        file.name
      }`
    })

    uppy.on('upload-success', (file, response) => {
      formikProps.setFieldValue(key, file.name)
    })
  }, [uppy])

  getDownloadUrl(useClient(), formikProps.values[key]).then((promise) => {
    setSignedSource(promise.url)
  })

  return (
    <EntityCard title={entityField.name}>
      <Grid item xs={SMALL_CARD}>
        <img
          alt="thumbnail"
          src={signedSource}
          style={{ maxWidth: '200px', maxHeight: '200px' }}
        />
      </Grid>
      <Grid item xs={SMALL_CARD}>
        <DragDrop
          height={'200px'}
          id={`dragDrop${key}`}
          //hidden={formikProps.values[key] ? true : false}
          uppy={uppy}
          locale={{
            strings: {
              dropHereOr: 'Drop thumbnail here or %{browse}',
              browse: 'browse',
            },
          }}
        />
        <div
          className="progress3"
          style={{ paddingTop: 20, paddingBottom: 20 }}
        >
          <StatusBar
            uppy={uppy}
            hideUploadButton
            id={`statusBar${key}`}
            hideAfterFinish={true}
            hidePauseResumeButton={true}
            showProgressDetails={true}
          />
        </div>
      </Grid>
    </EntityCard>
  )
}

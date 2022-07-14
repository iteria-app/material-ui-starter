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

interface IDragDropModelFormProps {
  props: IDetailPageProps
  formikProps: FormikProps<FormikValues>
  entityField: Field
}

interface DynamicProp {
  name: string
  [key: string]: any
}

const BIG_CARD = 12
const pathToFile = new RegExp('(.*/).*')
const fileExtension = new RegExp(/\.[^/.]+$/)

export const isGlbPath = (fields: any): { glbPath: string } | undefined => {
  if (fields) {
    const glbPath = fields.find((field: { name: string }) =>
      field.name.match(/.*glbPath$/i)
    )
    if (glbPath) return glbPath
  }
  return
}

export const getExtensionsFromEntityFields = (fields: any) => {
  return fields
    .map((field: any) => {
      if (field.name.match(/([A-Z].*)Path$/))
        //minimapGlbPath -> GlbPath
        return field.name.match(/([A-Z].*)Path$/)
      if (field.name.match(/(.*)Path$/)) return field.name.match(/(.*)Path$/) //usdzPath -> usdzPath, thumbnailPath -> thumbnailPath
    })
    .filter(Boolean)
}

const getFolders = (filePaths: any) => {
  return [
    ...new Set(
      filePaths.current.map((path: any) => {
        if (path?.data?.relativePath)
          return path.data.relativePath.match(pathToFile)[1]
        else return null //some files doesnt have relative path, because they arent in a subfolder
      })
    ),
  ]
}

const getUniqueFileNames = (filesInFolder: any[]) => {
  return [
    ...new Set(
      filesInFolder.map((path) => {
        return path.data.name.replace(fileExtension, '')
      })
    ),
  ]
}

const getFilesInFolder = (filePaths: any, folder: any) => {
  return filePaths.current.filter((path: any) => {
    if (path?.data?.relativePath) {
      if (folder == path.data.relativePath.match(pathToFile)[1]) {
        return path
      }
    }
    if (folder == null && !path?.data?.relativePath) return path
  })
}

const fillDynamicProps = (
  uniqueFileNames: any,
  filesInFolder: any,
  acceptedExtensions: any,
  acceptedImageExtensions: any,
  props: IDetailPageProps,
  entityField: Field
) => {
  uniqueFileNames.forEach((fileName: any) => {
    var dynamicProps: DynamicProp = { name: fileName }
    filesInFolder.forEach((path: any) => {
      if (fileName == path.data.name.replace(fileExtension, '')) {
        acceptedExtensions?.find((ext: any) => {
          if (path.extension == ext?.[1]) {
            dynamicProps[ext?.[0]] = path.s3Multipart.key
          }
          if (acceptedImageExtensions.includes(path.extension))
            dynamicProps['modelThumbnailPath'] = path.s3Multipart.key
        })
      }
    })
    //push the the dynamic prop into props
    props.data[entityField.name].push(dynamicProps)
  })
}

export const DragDropModelForm: React.FC<IDragDropModelFormProps> = ({
  props,
  formikProps,
  entityField,
}) => {
  const acceptedImageExtensions = ['jpg', 'jpeg', 'png'] //TODO findout what img types will we allow
  let acceptedFileExtension = ['.jpg', '.jpeg', '.png'] ///['image/*']

  const acceptedExtensions = getExtensionsFromEntityFields(
    entityField.entityFields?.fields
  )

  acceptedExtensions?.forEach((ext: any) => {
    if (ext?.[1]?.length <= 4) acceptedFileExtension.push(`.${ext?.[1]}`)
  })

  const [uppy] = React.useState(getUppy(useClient(), acceptedFileExtension))
  let filePaths = React.useRef<any[]>([''])
  filePaths.current.pop()

  useEffect(() => {
    uppy.on('file-added', (file) => {
      file.name = `${props.entityFields.name}/${uuidv4()}_${file.name}`
    })
    uppy.on('upload-success', (file, response) => {
      filePaths.current.push(file)
    })

    uppy.on('complete', (response) => {
      //get all unique foldernames
      const pathToFile = new RegExp('(.*/).*')
      const fileExtension = new RegExp(/\.[^/.]+$/)

      const folders = getFolders(filePaths)

      folders.map((folder) => {
        const filesInFolder = getFilesInFolder(filePaths, folder)
        //now i need to match files with the same names, this means first i should get all the file names without extensions,
        const uniqueFileNames = getUniqueFileNames(filesInFolder)
        //then for each file name fill the dynamicProp, here check if the extension is in a graphql entity name 'extPath' or 'somethingExtPath'
        fillDynamicProps(
          uniqueFileNames,
          filesInFolder,
          acceptedExtensions,
          acceptedImageExtensions,
          props,
          entityField
        )
      })
      //update formik
      formikProps.setFieldValue(entityField.name, props.data[entityField.name])
    })
  }, [uppy])

  return (
    <Grid item md={BIG_CARD}>
      <EntityCard title={entityField.name}>
        {formInputWrapper({
          entityName: props.entityFields.name,
          entityField,
          value: formikProps.values[`${entityField.name}`],
          label: getInputLabel,
          formikProps: formikProps,
        })}
        <Grid item xs={BIG_CARD}>
          <DragDrop
            id="dragDropOptimizedFiles"
            uppy={uppy}
            locale={{
              strings: {
                dropHereOr: 'Drop optimized files here or %{browse}',
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
              hideUploadButton
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

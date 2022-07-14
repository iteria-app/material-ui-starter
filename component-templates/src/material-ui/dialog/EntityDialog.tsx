import React from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { Field } from '../../gql'
import { FormEntityTable } from '@iteria-app/component-templates/material-ui'
import Translate from '../../i18n/Translate'
import { IFormInputRenderProps } from '../formatting/formInput'
import { stringPrettyCapitalize } from '../formatting'
import { FormikProps, FormikValues } from 'formik'

interface IEntityDialogProps {
  name: string
  data: any
  entityName: string
  entityField: Field
  render?: React.FC<IFormInputRenderProps>
  formikProps: FormikProps<FormikValues>
}

export const EntityDialog: React.FC<IEntityDialogProps> = ({
  name,
  data,
  entityName,
  entityField,
  render = ({ children }: IFormInputRenderProps) => {
    return <>{children}</>
  },
  formikProps,
}: IEntityDialogProps) => {
  const Render = render
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Render entityField={entityField}>
        <Button variant="outlined" onClick={handleClickOpen}>
          <Translate
            entityName={entityName}
            fieldName={entityField.name}
            defaultMessage={stringPrettyCapitalize(entityField.name)}
          />
        </Button>
      </Render>

      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
        <DialogTitle>
          <Grid container>
            <Grid item xs>
              <Translate
                entityName={entityName}
                fieldName={entityField.name}
                defaultMessage={stringPrettyCapitalize(entityField.name)}
              />
            </Grid>
            <Grid item>
              <IconButton aria-label="close" onClick={handleClose}>
                <Close />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <FormEntityTable
              name={name}
              entityField={entityField}
              data={data}
              formikProps={formikProps}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

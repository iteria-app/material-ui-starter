import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from '@mui/material'
import { Add, Close } from '@mui/icons-material'
import { Field } from '@iteria-app/component-templates/src/graphql/index'
import Translate from '../../i18n/Translate'
import { EntityListContainer } from '../../components/entity/EntityListContainer'
import { stringPrettyCapitalize } from '../formatting'

interface IEntityListDialogProps {
  children: React.ReactNode
  entityField: Field
  onClickRow?: (entity: any) => void
  setRowClickDisabled?: (arg: Boolean) => void
}

const calculateDialogSize = (field: Field): 'sm' | 'md' | 'lg' => {
  const columnSize = 170
  const fieldsCount = field.entityFields?.fields?.length || 1
  const width = columnSize * fieldsCount

  if (width >= 960) {
    return 'lg'
  }

  if (width >= 600) {
    return 'md'
  }

  return 'sm'
}

export const EntityListDialog: React.FC<IEntityListDialogProps> = ({
  children,
  entityField,
  onClickRow,
  setRowClickDisabled,
}: IEntityListDialogProps) => {
  const [open, setOpen] = React.useState(false)
  const objectRef =
    entityField.entityFields?.fields.find((field) => field.type === 'object') ||
    entityField

  const handleClickOpen = () => {
    setOpen(true)
    if (setRowClickDisabled) setRowClickDisabled(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onClick: handleClickOpen })
        }
        return child
      })}

      <Dialog
        fullWidth
        maxWidth={calculateDialogSize(objectRef)}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <Grid container>
            <Grid item xs>
              <Translate
                entityName={objectRef.name}
                defaultMessage={stringPrettyCapitalize(objectRef.name)}
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
          <EntityListContainer
            entity={objectRef.name}
            onClickRow={(e) => {
              if (onClickRow) {
                onClickRow(e.row)
              }

              setOpen(false)
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

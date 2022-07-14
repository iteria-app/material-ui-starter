import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { Translate } from '../../i18n'

interface DeleteModalProps {
  open: Boolean
  handleClose: () => void
  handleDelete: () => void
  value?: string
}

export const DeleteModal = ({
  open,
  handleClose,
  handleDelete,
  value,
}: DeleteModalProps) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      <h2>
        <Translate
          entityName={'deleteDialogTitle'}
          defaultMessage={'Delete?'}
        />
      </h2>
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        <Translate
          entityName={'deleteDialogText'}
          defaultMessage={'Are you sure you want to delete {value}?'}
          values={{
            value: `<b>${value}</b>`,
          }}
        />
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} autoFocus>
        <Translate entityName={'No'} />
      </Button>
      <Button onClick={handleDelete}>
        <Translate entityName={'Yes'} />
      </Button>
    </DialogActions>
  </Dialog>
)

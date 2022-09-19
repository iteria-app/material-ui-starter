import { Close } from '@mui/icons-material'
import {
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  DialogContent,
} from '@mui/material'
import React from 'react'

interface Props {
  Container: any
  View: any
  onClickRow?: (entity: any) => void
}

export const LookupDialog: React.FC<Props> = ({
  children,
  Container,
  View,
  onClickRow,
}) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
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
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>
          <Grid container>
            <Grid item xs>
              Text
            </Grid>
            <Grid item>
              <IconButton aria-label="close" onClick={handleClose}>
                <Close />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Container
            View={(data, filterProps) => (
              <View
                data={data?.data}
                loading={data?.loading}
                error={data?.error}
                onClickRow={(row) => {
                  if (onClickRow) {
                    onClickRow(row)
                  }

                  setOpen(false)
                }}
                filterProps={filterProps}
              />
            )}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

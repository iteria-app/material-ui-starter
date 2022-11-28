import { Close } from '@mui/icons-material'
import {
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  DialogContent,
} from '@mui/material'
import React from 'react'
import {
  stringPrettyCapitalize,
  Translate,
} from '@iteria-app/component-templates'
interface Props {
  children: React.ReactNode
  Container: any
  View: any
  onClickRow?: (products: any) => void
  title?: string
}
export const LookupDialog: React.FC<Props> = ({
  children,
  Container,
  View,
  onClickRow,
  title,
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
              <Translate
                entityName={title ?? 'default'}
                fieldName="lookup.title"
                defaultMessage={
                  stringPrettyCapitalize(title) ?? 'Lookup dialog'
                }
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

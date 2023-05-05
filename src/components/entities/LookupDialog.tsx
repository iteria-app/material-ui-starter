import { Close } from '@mui/icons-material'
import {
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  DialogContent,
  Button,
  DialogActions,
} from '@mui/material'
import React, { MutableRefObject, ReactNode, useRef } from 'react'
import {
  FilterProps,
  stringPrettyCapitalize,
  Translate,
} from '@iteria-app/component-templates'
import { GridSelectionModel } from '@mui/x-data-grid'
import { EntitiesQuery, IError } from '../../generated/graphql'
interface Props {
  children?: ReactNode
  Container?: React.FC<IEnitityListContainerProps>
  View?: React.FC<IViewProps>
  onSubmit?: (rows?: GridSelectionModel) => void
  title?: string
  data?: any
  checkboxes?: boolean
  radio?: boolean
  rowPath?: string
}
interface IViewProps {
  data: EntitiesQuery
  error?: IError | null
  loading?: boolean
  checkboxes?: boolean
  fromLookup?: boolean
  radio?: boolean
  selectionModel?: MutableRefObject<GridSelectionModel>
  filterProps?: FilterProps
}
interface IEnitityListContainerProps {
  View: React.FC<IViewProps>
}
export const LookupDialog: React.FC<Props> = ({
  children,
  Container,
  View,
  onSubmit,
  title,
  data,
  checkboxes,
  radio,
}) => {
  const [open, setOpen] = React.useState(false)
  const selectionModel = useRef<GridSelectionModel>([])
  const handleClickOpen = () => {
    if (View) {
      setOpen(true)
    } else {
      onSubmit?.()
    }
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // @ts-ignore
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
          {Container && View ? (
            <Container
              View={({ data, error, loading, filterProps }) => (
                <View
                  data={data}
                  loading={loading}
                  error={error}
                  checkboxes={checkboxes}
                  fromLookup={true}
                  radio={radio}
                  selectionModel={selectionModel}
                  filterProps={filterProps}
                />
              )}
            />
          ) : (
            View && <View data={data} />
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              setOpen(false)
              onSubmit?.(selectionModel?.current)
            }}
            color="secondary"
            variant="contained"
            style={{ margin: '16px' }}
          >
            <Translate
              entityName="FIELD"
              fieldName="lookup.confirm"
              defaultMessage="Confirm"
            />
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

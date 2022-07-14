import * as React from 'react'
import { IconButton } from '@mui/material'
import { DeleteModal } from './DeleteModal'
import { Field } from 'gql'
import { Delete, Undo } from '@mui/icons-material'

interface DeleteIconContainerProps {
  onDeleteRestore: (
    entityDeleteField: Field | undefined,
    item: any,
    itemDeleted: boolean | undefined
  ) => void
  entityDeleteField: Field | undefined
  item: any
  itemDeleted: boolean | undefined
}

export const DeleteIconContainer = ({
  onDeleteRestore,
  entityDeleteField,
  item,
  itemDeleted,
}: DeleteIconContainerProps) => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <IconButton
        color="primary"
        onClick={(event) => {
          event.stopPropagation()
          if (item?.isDeleted) {
            onDeleteRestore(entityDeleteField, item, itemDeleted)
          } else {
            setOpen(true)
          }
        }}
      >
        {itemDeleted ? <Undo /> : <Delete />}
      </IconButton>
      <DeleteModal
        open={open}
        value={item?.name ?? item?.id}
        handleClose={() => setOpen(false)}
        handleDelete={() => {
          setOpen(false)
          onDeleteRestore(entityDeleteField, item, itemDeleted)
        }}
      />
    </>
  )
}

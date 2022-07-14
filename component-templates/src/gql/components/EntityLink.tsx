import React from 'react'
import { Chip } from '@mui/material'
import { findPathRoot } from '../entity/helper'

interface EntityLinkProps {
  id: number
  label: string
  typename: string
}

const EntityLink: React.FC<EntityLinkProps> = ({
  id,
  label,
  typename,
}): JSX.Element =>
  label ? (
    <a href={findPathRoot(typename) + '/' + typename + '/' + id?.toString()}>
      <Chip label={label} color="primary" />
    </a>
  ) : (
    <></>
  )

export default EntityLink

import { Chip } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

type Props = {
  rootName?: string
}

const ObjectFormat = ({ rootName }: Props) => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <a
      onClick={() => {
        navigate('/app/' + 'FIELD' + '?' + rootName + `Id=${params?.id}`)
      }}
    >
      <Chip label={'FIELD'} color="primary" />
    </a>
  )
}

export default ObjectFormat

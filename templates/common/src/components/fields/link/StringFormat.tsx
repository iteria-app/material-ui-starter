import { Chip } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

type Props = {
  rootName?: string
}

const StringFormat = ({ rootName }: Props) => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <a
      onClick={() => {
        navigate('/app/' + 'todo' + '?' + rootName + `Id=${params?.id}`) // on string format should be sth like '/app/ROOTNAMEOFFIELD/rootName?rootNameId=id'
      }}
    >
      <Chip label={'FIELD'} color="primary" />
    </a>
  )
}

export default StringFormat

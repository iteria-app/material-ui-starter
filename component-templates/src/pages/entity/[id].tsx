import React from 'react'
import { useNavigate } from 'react-router-dom'

import { EntityDetailContainer } from '../../components/entity/EntityDetailContainer'

export const EntityDetailPage: React.FC = () => {
  let navigate = useNavigate()
  return <EntityDetailContainer entity="pracovnik" />
}

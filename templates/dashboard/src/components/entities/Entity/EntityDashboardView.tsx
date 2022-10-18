import React from 'react'
import { Box } from '@mui/material'
import { EntitiesQuery } from '../../../generated/graphql'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/typography/FormatEntityField'
import Masonry from '@mui/lab/Masonry'

export interface EntityDashboardViewProps {
  data: EntitiesQuery
}

const EntityDashboardView: React.FC<EntityDashboardViewProps> = ({ data }) => {
  // TODO: no query on start and each item in `columns` array have one (or more) queries
  const first = data?.Entity?.[0]
  const columns = [
    <Box key={'FIELD'}>
      <FormatEntityField value={first?.FIELD} type={'string'} />
    </Box>,
  ]
  return (
    <Masonry columns={{xs: 1, md: 2, lg: 3, xl: 4}} spacing={2} sx={{marginTop: '20px'}}>
      {columns.map((column) => column)}
    </Masonry>
  )
}

export default EntityDashboardView

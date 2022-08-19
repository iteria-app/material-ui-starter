import React, { useEffect } from 'react'
import {
  Badge,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getImagePath } from '../../image'
import { getCardTitle } from '../../title'
import { FormatEntityField } from '../../fields/typography/FormatEntityField'
import { EntityFragment } from '../../../generated/graphql'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export interface IPropsEntityCardItem {
  data: EntityFragment // TODO entity: EntityFragment
}

const EntityCardItem: React.FC<IPropsEntityCardItem> = ({ data }) => {
  const navigate = useNavigate()

  const columns = [
    <Box key={'FIELD'}>
      {/* TODO <FormatEntityField value={product.name} */}
      <FormatEntityField value={data?.FIELD} type="string" />
    </Box>,
  ]



  // TODO styled component
  return (
    <Box
      p="5px"
      m="5px"
      maxWidth="200px"
      sx={{
        cursor: 'pointer',
      }}
      onClick={() => navigate(data?.id.toString())}
    >
      <Card
        sx={{
          borderRadius: '7px',
        }}
      >
        <CardHeader
          title={getCardTitle(data)}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          image={getImagePath(data) ?? '/static/placeholder.png'}
          height="250px"
          alt={getCardTitle(data)}
          sx={{ minWidth: '200px' }}
        />
        <CardContent>{columns.slice(1).map((column) => column)}</CardContent>
      </Card>
    </Box>
  )
}

export default EntityCardItem

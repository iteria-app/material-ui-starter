import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/typography/FormatEntityField'
import { EntityFragment } from '../../../generated/graphql'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { getCardTitle, getImagePath } from '@iteria-app/component-templates'

export interface IPropsEntityCardItem {
  data: EntityFragment
}

const EntityCardListItem: React.FC<IPropsEntityCardItem> = ({ data }) => {
  const navigate = useNavigate()

  const columns = [
    <Box
      key={'FIELD'}
      sx={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <FormatEntityField value={data?.FIELD} type={'string'} />
    </Box>,
  ]
  const primary = getCardTitle(data)
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
          alt={primary}
          sx={{ minWidth: '200px' }}
        />
        <CardContent>
          {Object.values(columns).filter((v) => data?.[v?.key] !== primary)}
        </CardContent>
      </Card>
    </Box>
  )
}

export default EntityCardListItem

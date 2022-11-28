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
import { useFormikContext } from 'formik'

export interface IPropsEntityCardItem {
  data: EntityFragment
  relationshipName?: string
  index?: number
}

const EntityCardListItem: React.FC<IPropsEntityCardItem> = ({
  data,
  relationshipName,
  index,
}) => {
  const navigate = useNavigate()
  let formikContext
  if (relationshipName) formikContext = useFormikContext()
  const setFieldValue = formikContext?.setFieldValue
  const columns = [
    <Box
      key={'FIELD'}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '5px',
      }}
    >
      <FormatEntityField
        value={data?.FIELD}
        type={'string'}
        relationshipName={relationshipName}
        index={index}
      />
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
      onClick={() => !relationshipName && navigate(data?.id.toString())}
      data-test-id={`card-list-item-${'Entity'}-${data.id}`}
      data-test={`card-list-item-${'Entity'}`}
    >
      <Card
        sx={{
          borderRadius: '7px',
        }}
      >
        <CardHeader
          title={primary}
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
          {Object.values(columns).filter(
            (v) => data?.[v?.key?.toString().split('.')?.pop()] !== primary
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default EntityCardListItem

import React from 'react'
import {
  Avatar,
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
import {
  getName,
  getTitle,
  getImagePath,
  stringAvatar,
  CardListColumnWrapper,
  getRowId,
} from '@iteria-app/component-templates'
import { useFormikContext } from 'formik'

export interface IPropsEntityCardItem {
  data: EntityFragment
  relationshipName?: string
  rootName?: string
  index?: number
}

const EntityCardListItem: React.FC<IPropsEntityCardItem> = ({
  data,
  relationshipName,
  rootName,
  index,
}) => {
  const navigate = useNavigate()
  let formikContext
  if (relationshipName) formikContext = useFormikContext()
  const setFieldValue = formikContext?.setFieldValue
  const columns = [
    <CardListColumnWrapper key={'FIELD'}>
      <FormatEntityField
        value={data?.FIELD}
        type={'string'}
        relationshipName={relationshipName}
        rootName={rootName}
        index={index}
      />
    </CardListColumnWrapper>,
  ]
  return (
    <Box
      p="5px"
      m="5px"
      maxWidth="200px"
      sx={{
        cursor: 'pointer',
      }}
      onClick={() => !relationshipName && navigate('../' + getRowId(data)?.toString())}
      data-test-id={`card-list-item-${'Entity'}-${getRowId(data)}`}
      data-test={`card-list-item-${'Entity'}`}
    >
      <Card
        sx={{
          borderRadius: '7px',
        }}
      >
        <CardHeader
          title={
            <Box sx={{ fontWeight: 'regular', fontStyle: 'normal' }}>
              {getTitle(data)}
            </Box>
          }
          avatar={<Avatar {...stringAvatar(getName(data))} />}
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
          alt={getTitle(data)}
          sx={{ minWidth: '200px' }}
        />
        <CardContent>{columns}</CardContent>
      </Card>
    </Box>
  )
}

export default EntityCardListItem

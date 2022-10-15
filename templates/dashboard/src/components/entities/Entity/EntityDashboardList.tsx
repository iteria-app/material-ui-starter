import React from 'react'
import {
  Box,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Button,
} from '@mui/material'
import { ArrowRight, MoreVert } from '@mui/icons-material'
import {
  getCardTitle,
  getImagePath,
  getUpdatedTimeString,
} from '@iteria-app/component-templates'

const EntityDashboardList = ({ data }: { data: any[] }) => {
  return (
    <Card sx={{ minWidth: '300px' }}>
      <CardHeader
        subtitle={`${data?.length} in total`}
        title="Latest Products"
      />
      <Divider />
      <List>
        {(data ?? [{ id: 0, name: 'No data' }]).map((item, i) => {
          return (
            <ListItem divider={i < data?.length - 1} key={item?.id}>
              <ListItemAvatar>
                <img
                  alt="Product"
                  style={{ padding: '5px' }}
                  height={48}
                  width={48}
                  src={getImagePath(item) ?? '/static/placeholder.png'}
                />
              </ListItemAvatar>
              <ListItemText
                primary={getCardTitle(item) ?? item[Object.keys(item)?.[1]]}
                secondary={getUpdatedTimeString(item.updated_at ?? item.updatedAt)}
              />
              <IconButton edge="end" size="small">
                <MoreVert />
              </IconButton>
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRight />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  )
}

export default EntityDashboardList

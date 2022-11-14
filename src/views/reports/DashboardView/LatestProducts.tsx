import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import { MoreVert, ArrowRight } from '@mui/icons-material'
import {getUpdatedTimeString} from "@iteria-app/component-templates"

const actualDate = new Date()

const data = [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: getUpdatedTimeString(new Date().setHours(actualDate.getHours()-2)),
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt:getUpdatedTimeString(new Date().setHours(actualDate.getHours()-2)),
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: getUpdatedTimeString(new Date().setHours(actualDate.getHours()-3)),
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: getUpdatedTimeString(new Date().setHours(actualDate.getHours()-5)),
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: getUpdatedTimeString(new Date().setHours(actualDate.getHours()-9)),
  },
]

export const LatestProducts = () => {
  const [products] = useState(data)

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Latest Products"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem divider={i < products.length - 1} key={product.id}>
            <ListItemAvatar>
              <img
                alt="Product"
                height={48}
                width={48}
                src={product.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={product.updatedAt}
            />
            <IconButton edge="end" size="small">
              <MoreVert />
            </IconButton>
          </ListItem>
        ))}
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

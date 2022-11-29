import React from 'react'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Chip,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ProductsFragment } from '../../../generated/graphql'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { getCardTitle, getImagePath } from '@iteria-app/component-templates'
import { useFormikContext } from 'formik'
export interface IPropsProductsCardItem {
  data: ProductsFragment
  relationshipName?: string
  index?: number
}
const ProductsCardListItem: React.FC<IPropsProductsCardItem> = ({
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
      key="name"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '5px',
      }}
    >
      <Typography>{data?.name}</Typography>
    </Box>,
    <Box
      key="price"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '5px',
      }}
    >
      <Typography>{data?.price}</Typography>
      {data != null && <Chip label={data?.availability} size="small" />}
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
      data-test-id={`card-list-item-products-${data.id}`}
      data-test="card-list-item-products"
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
export default ProductsCardListItem

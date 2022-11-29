import React from 'react'
import {
  Avatar,
  Checkbox,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useIntl } from 'react-intl'
import {
  getImagePath,
  getName,
  stringAvatar,
} from '@iteria-app/component-templates'
import { OrdersFragment } from '../../../generated/graphql'
import { useFormikContext } from 'formik'
interface OrdersListItem {
  data: OrdersFragment
  relationshipName?: string
  index?: number
}
const OrdersListItem: React.FC<OrdersListItem> = ({
  data,
  relationshipName,
  index,
}) => {
  const intl = useIntl()
  const theme = useTheme()
  const navigate = useNavigate()
  let formikContext
  if (relationshipName) formikContext = useFormikContext()
  const setFieldValue = formikContext?.setFieldValue
  const columns = [
    <>
      <Typography>{data?.title}</Typography>
    </>,
    <>
      <Typography>
        {data?.order_date ? intl.formatDate(data?.order_date) : ''}
      </Typography>
    </>,
    <>
      <Typography>
        {data?.shipped_date ? intl.formatDate(data?.shipped_date) : ''}
      </Typography>
    </>,
  ]
  return (
    <ListItem
      secondaryAction={<Checkbox onClick={(e) => e.stopPropagation()} />}
      disablePadding
      sx={{ background: theme.palette.background.paper, borderRadius: '20px' }}
      data-test-id={`list-item-orders-${data.id}`}
      data-test="list-item-orders"
    >
      <ListItemButton
        onClick={() => !relationshipName && navigate(data?.id.toString())}
      >
        <ListItemAvatar>
          <Avatar src={getImagePath(data)} {...stringAvatar(getName(data))} />
        </ListItemAvatar>
        <ListItemText
          primary={columns[0]}
          secondary={
            <Grid
              container
              columnGap="16px"
              sx={{
                '& .dotSeparator:last-of-type': {
                  display: 'none',
                },
              }}
            >
              {columns.slice(1).map((item) => (
                <>
                  {item}
                  <Typography className="dotSeparator"> ● </Typography>
                </>
              ))}
            </Grid>
          }
        />
      </ListItemButton>
    </ListItem>
  )
}
export default OrdersListItem

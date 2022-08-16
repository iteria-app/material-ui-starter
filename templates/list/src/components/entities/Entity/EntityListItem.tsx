import {
  Avatar,
  Checkbox,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import FormatEntityField from './FormatEntityField'
import { getImagePath } from '../../image'
import { stringAvatar } from '../../avatar'
import { getName } from '../../name'

interface EntityListItem {
  data: any
}

const EntityListItem: React.FC<EntityListItem> = ({ data }) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const columns = [
    <>
      <FormatEntityField value={data?.FIELD} />
    </>,
  ]
  return (
    <ListItem
      secondaryAction={<Checkbox onClick={(e) => e.stopPropagation()} />}
      disablePadding
      sx={{ background: theme.palette.background.paper, borderRadius: '20px' }}
    >
      <ListItemButton onClick={() => navigate(data?.id.toString())}>
        <ListItemAvatar>
          <Avatar src={getImagePath(data)} {...stringAvatar(getName(data))} />
        </ListItemAvatar>
        <ListItemText
          primary={columns[0]}
          secondary={
            <Grid
              container
              columnGap={'16px'}
              sx={{
                fontWeight: 400,
                '& .dot:last-of-type': {
                  display: 'none',
                },
              }}
            >
              {columns.slice(1).map((column) => (
                <>
                  {column}
                  <span className="dot"> ● </span>
                </>
              ))}
            </Grid>
          }
        />
      </ListItemButton>
    </ListItem>
  )
}

export default EntityListItem

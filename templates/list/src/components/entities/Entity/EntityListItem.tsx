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
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/typography/FormatEntityField'
import {
  getImagePath,
  getName,
  getRowId,
  getTitle,
  stringAvatar,
} from '@iteria-app/component-templates'
import { EntityFragment } from '../../../generated/graphql'
import { useFormikContext } from 'formik'

interface EntityListItem {
  data: EntityFragment
  relationshipName?: string
  rootName?: string
  index?: number
}

const EntityListItem: React.FC<EntityListItem> = ({
  data,
  relationshipName,
  rootName,
  index,
}) => {
  const theme = useTheme()
  const navigate = useNavigate()
  let formikContext
  if (relationshipName) formikContext = useFormikContext()
  const setFieldValue = formikContext?.setFieldValue
  const columns = [
    <>
      <FormatEntityField
        key={'FIELD'}
        type={'string'}
        value={data?.FIELD}
        relationshipName={relationshipName}
        setFieldValue={setFieldValue}
        index={index}
        rootName={rootName}
      />
    </>,
  ]
  return (
    <ListItem
      secondaryAction={<Checkbox onClick={(e) => e.stopPropagation()} />}
      disablePadding
      sx={{ background: theme.palette.background.paper, borderRadius: '20px' }}
      data-test-id={`list-item-${'Entity'}-${getRowId(data)}`}
      data-test={`list-item-${'Entity'}`}
    >
      <ListItemButton
        onClick={() =>
          !relationshipName && navigate('../' + getRowId(data)?.toString())
        }
      >
        <ListItemAvatar>
          <Avatar src={getImagePath(data)} {...stringAvatar(getName(data))} />
        </ListItemAvatar>
        <ListItemText
          primary={getTitle(data)}
          secondary={
            <Grid
              container
              columnGap={'16px'}
              sx={{
                '& .dotSeparator:last-of-type': {
                  display: 'none',
                },
              }}
            >
              {columns.map((item) => (
                <>
                  {item}
                  <Typography className={'dotSeparator'}> ● </Typography>
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

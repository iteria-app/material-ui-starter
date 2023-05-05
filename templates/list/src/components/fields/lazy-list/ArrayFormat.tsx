import React from 'react'
import {
  CreateButton,
  FilterDrawer,
  Toolbar,
} from '@iteria-app/component-templates'
import EntityContainer from '@iteria-app-mui/common/src/components/entities/Entity/EntityContainer'
import EntityListView from '@iteria-app-mui/list/src/components/entities/Entity/EntityListView'
import {
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton,
  useTheme,
} from '@mui/material'
const ArrayFormat: React.FC = () => {
  const theme = useTheme()

  return (
    <EntityContainer
      Toolbar={({ filterProps, introspection }) => (
        <>
          <Toolbar
            filterProps={filterProps}
            introspection={introspection}
            entityName="Entity"
          >
            <CreateButton entityName="Entity" />
          </Toolbar>
        </>
      )}
      View={({ data, filterCallbacks }) => (
        <>
          <EntityListView data={data?.Entity} />
        </>
      )}
      Skeleton={
        <Grid container direction={'row'}>
          {[...Array(6)].map((_, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                background: theme.palette.background.paper,
                borderRadius: '20px',
              }}
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Skeleton variant="circular" width={40} height={40} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Skeleton
                      variant="text"
                      width={150}
                      sx={{ fontSize: '1rem' }}
                    />
                  }
                  secondary={
                    <Skeleton
                      variant="text"
                      width={400}
                      sx={{ fontSize: '1rem' }}
                    />
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Grid>
      }
    />
  )
}

export default ArrayFormat

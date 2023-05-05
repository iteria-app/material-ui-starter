import React from 'react'
import EntityCardListView from '../../components/entities/Entity/EntityCardListView'
import EntityContainer from '@iteria-app-mui/common/src/components/entities/Entity/EntityContainer'
import {
  CreateButton,
  FilterDrawer,
  Toolbar,
} from '@iteria-app/component-templates'
import { Grid, Box, Skeleton } from '@mui/material'
import EntityFilter from '@iteria-app-mui/common/src/components/entities/Entity/EntityFilter'

const EntityThumbnailsPage: React.FC = () => {
  return (
    <EntityContainer
      View={({ data, filterCallbacks }) => (
        <>
          <FilterDrawer>
            <EntityFilter filterCallbacks={filterCallbacks} />
          </FilterDrawer>
          <EntityCardListView data={data?.Entity} />
        </>
      )}
      Toolbar={({ filterProps, introspection }) => (
        <Toolbar
          filterProps={filterProps}
          introspection={introspection}
          entityName="Entity"
        >
          <CreateButton entityName="Entity" />
        </Toolbar>
      )}
      Skeleton={
        <Grid container>
          {[...Array(6)].map((_, index) => (
            <Box key={index} p={'5px'} m={'5px'} maxWidth={'200px'}>
              <Skeleton
                variant="rectangular"
                animation="pulse"
                width={200}
                height={150}
              />
              <Box marginTop={'5px'}>
                <Skeleton variant="text" animation="pulse" />
                <Skeleton variant="text" animation="pulse" width={100} />
              </Box>
            </Box>
          ))}
        </Grid>
      }
    />
  )
}

export default EntityThumbnailsPage

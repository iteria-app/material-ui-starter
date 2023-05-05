import React from 'react'
import EntityTab from './EntityTab'
import { EntityFragment } from '../../../generated/graphql'
import { ViewGridTemplate, getTitle } from '@iteria-app/component-templates'
import { Box, Tabs, Tab } from '@mui/material'

export interface EntityTabsProps {
  data?: EntityFragment[]
  relationshipName?: string
  onTabsChanged?: (event, newValue, value) => void
}

const EntityTabs: React.FC<EntityTabsProps> = ({
  data,
  relationshipName,
  onTabsChanged,
}) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    onTabsChanged?.(event, newValue, data)
  }

  return (
    <ViewGridTemplate>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          {data?.map((entity, index) => (
            <Tab
              label={
                entity?.label ??
                (entity ? getTitle(entity) : `Tab ${index + 1}`)
              }
              key={index}
            />
          ))}
        </Tabs>
      </Box>
      {data?.map((entity, index) => (
        <>
          <EntityTab
            data={entity}
            visible={value === index}
            key={index}
            relationshipName={relationshipName}
            index={index}
          />
        </>
      ))}
    </ViewGridTemplate>
  )
}

export default EntityTabs

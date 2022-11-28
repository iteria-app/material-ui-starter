import React from 'react'
import { FormatEntityField } from '@iteria-app-mui/common/src/components/fields/form/FormatEntityField'
import { EntityFragment } from '../../../generated/graphql'
import { Box, Typography } from '@mui/material'
import { getTitleFieldKey } from '@iteria-app/component-templates'

export interface IPropsEntityCalendarEvent {
  data: EntityFragment
  relationshipName?: string
}

const EntityCalendarEvent: React.FC<IPropsEntityCalendarEvent> = ({ data }) => {
  const columns = [
    <Box key={'FIELD'}>
      <FormatEntityField value={data?.FIELD} type={'string'} />
    </Box>,
  ]
  const title = getTitleFieldKey(data)
  return (
    <>
      <Box key={`Entity.${title}`}>
        <Typography fontSize="14px" fontWeight="bold">
          {data?.[`${title}`] ?? 'Event title'}
        </Typography>
      </Box>
      {Object.values(columns).filter((v) => {
        if (v?.key?.toString().split('.')?.pop() !== title) 
        return v
      })}
    </>
  )
}

export default EntityCalendarEvent

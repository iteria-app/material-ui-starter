import React, { useState } from 'react'
import '@fullcalendar/react/dist/vdom' //this needs to be imported before fullcalendar
import FullCalendar, { EventInput } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {
  FilterProps,
  getEventCustomData,
  getInvertedColor,
  getRandomColor,
} from '@iteria-app/component-templates'
import { useNavigate } from 'react-router-dom'
import { EntityFragment } from '../../../generated/graphql'
import EntityCalendarEvent from './EntityCalendarEvent'

export interface EntityFullcalendarProps {
  data: EntityFragment[] | null
  filterProps: FilterProps
  relationshipName?: string
}

interface DateState {
  start: Date
  end: Date
}

const EntityFullcalendar: React.FC<EntityFullcalendarProps> = ({
  data,
  filterProps,
  relationshipName,
}) => {
  const navigate = useNavigate()
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      weekends={true}
      datesSet={({ start, end, timeZone }) => {
        console.log('fetch events', { start, end, timeZone })
        const filter = {
          startAt: { _lte: end },
          endAt: { _gte: start },
        }
        filterProps.onFilter(filter)
      }}
      events={({ start, end, timeZone }, success, failure) => {
        const events: EventInput[] = data?.map((d) => {
          return {
            start: d?.startAt,
            end: d?.endAt,
            id: d?.id,
            color: getRandomColor(d?.id).color, //TODO: add other default fields, depends what we want to use, https://fullcalendar.io/docs/event-source-object#options
            textColor: getInvertedColor(getRandomColor(d?.id).rgba, true).color,
            customData: getEventCustomData(d),
          }
        })

        if (events) success(events)
      }}
      eventClick={(e) => navigate(e?.event?.id)}
      eventContent={(eventInfo) => (
        <EntityCalendarEvent
          data={eventInfo.event._def.extendedProps.customData}
          key={eventInfo.event.id}
          relationshipName={relationshipName}
        />
      )}
    />
  )
}

export default EntityFullcalendar

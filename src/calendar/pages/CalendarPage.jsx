import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'

import { localizer } from '../../helpers/calendarLocalizer'
import { Navbar } from "../components/Navbar"
import { getMessagesES } from '../../helpers/getMessages'
import { CalendarEvent } from '../components/CalendarEvent'
import { CalendarModal } from '../components/CalendarModal'
import { useUiStore } from '../../hooks/useUiStore'
import { useCalendarStore } from '../../hooks/useCalendarStore'
import { FabAddNew } from '../components/FabAddNew'
import { FabDelete } from '../components/FabDelete'


export const CalendarPage = () => {

  const {events, setActiveEvent} = useCalendarStore();
  const {openDateModal} = useUiStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347Cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  // Eventos del calendario
  const onDoubleClick = (event) => {
    // console.log({ doubleClick: event });
    openDateModal();
  }

  const onSelect = (event) => {
    // console.log({ click: event });
    setActiveEvent(event);
  }

  const onViewChanged = (event) => {
    // console.log({viewChanged: event});
    localStorage.setItem('lastView', event);
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />

      <FabAddNew />
      <FabDelete />
    </>
  )
}

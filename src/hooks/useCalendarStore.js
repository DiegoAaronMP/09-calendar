import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {

        // Si el evento tiene un id
        if (calendarEvent._id) {
            // Actualizando un evento
            dispatch(onUpdateEvent({...calendarEvent}))
        } else {
            // Si no, esta creando un nuevo evento
            dispatch(onAddNewEvent({
                ...calendarEvent,
                // id ficticio
                _id: new Date().getTime()
            }));
        }
    }

    const startDeletingEvent = () => {
        dispatch(onDeleteEvent());
    }

    return {
        //* Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent, // si es null regresa falso, si tiene un objeto regresa true

        //* Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}
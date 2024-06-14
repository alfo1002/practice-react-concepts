import { useState } from "react"
import { EventItem } from "./components/EventItem/EventItem"
import eventsJSON from '../../data/events.json'
import { useEventsData } from "../../hooks/useEventsData"
import { useNavigate } from "react-router-dom"

export const Events = ({ searchTerm }) => {
    const { events, isLoading, error } = useEventsData()
    const navigate = useNavigate()
    const onHandleClick = (id) => {
        console.log('Evento clickeado:', id)
        navigate(`/detail/${id}`)
    }

    const renderEvents = () => {
        let eventsFiltered = events
        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        return eventsFiltered.map((eventItem) => (
            <EventItem key={`event-item-${eventItem.id}`}
                name={eventItem.name} info={eventItem.info} image={eventItem.images[0].url}
                onHandleClick={onHandleClick} id={eventItem.id}
            />
        ))
    }

    if (error) return <div>Error: {error.message}</div>

    if (isLoading) return <div>Cargando eventos...</div>

    return (
        <>
            <div> Eventos:
                {renderEvents()}
            </div>
        </>
    )
}

import { useState } from "react"
import { EventItem } from "./components/EventItem/EventItem"
import eventsJSON from '../../data/events.json'

export const Events = ({ searchTerm }) => {
    const [data] = useState(eventsJSON)
    const { _embedded: { events } } = data

    const onHandleClick = (id) => { console.log('Evento clickeado:', id) }

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

    return (
        <>
            <div> Eventos:
                {renderEvents()}
            </div>
        </>
    )
}

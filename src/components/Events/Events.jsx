import { useState } from "react"
import { EventItem } from "./components/EventItem/EventItem"
import eventsJSON from '../../data/events.json'

export const Events = () => {
    const [data] = useState(eventsJSON)
    const { _embedded: { events } } = data

    return (
        <>
            <div>
                Eventos:
                {
                    events.map((eventItem) => (
                        <EventItem key={`event-item-${eventItem.id}`}
                            name={eventItem.name}
                            info={eventItem.info}
                            image={eventItem.images[0].url}
                        />
                    ))}
            </div>
        </>
    )
}

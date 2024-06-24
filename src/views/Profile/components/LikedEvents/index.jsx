import { useEffect, useState } from "react"
import { LIKED_EVENTS_STORAGE_KEY } from "../../../../utils/constants"
import { EventItem } from "../../../../components/Events/components/EventItem/EventItem"
import { useNavigate } from "react-router-dom"

export const LikedEvents = () => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const fetchEventsDetails = async () => {
            try {
                const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || []
                console.log(likedEvents)
                const results = []
                for (const eventId of likedEvents) {
                    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`)
                    const data = await response.json()
                    results.push(data)
                }
                setEvents(results)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchEventsDetails()
    }, [])

    if (Object.keys(error).length > 0) {
        return <div>Hubo un error al cargar los eventos</div>
    }
    if (isLoading) {
        return <div>Cargando Eventos...</div>
    }

    const handleEventClick = (eventId) => {
        navigate(`/detail/${eventId}`)
    }

    return (
        <div>
            {events.map((event, index) => (
                <EventItem
                    key={`liked-event-item-${event.id}-${index}`}
                    name={event.name}
                    info={event.info}
                    image={event.images?.[0].url}
                    onHandleClick={handleEventClick}
                    id={event.id}
                />
            ))}
        </div>
    )
}

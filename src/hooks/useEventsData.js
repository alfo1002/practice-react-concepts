import { useState } from 'react'
import eventsJSON from '../data/events.json'

//Hook para hacer una llamada a la API y guardarlo en el estado local
export const useEventsData = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const countryCode = 'MX'
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=${countryCode}`

    const fetchEvents = async (params) => {
        try {
            const response = await fetch(`${url}${params?.length ? params : ''}`)
            const data = await response.json()
            setData(data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        }
    }
    //fetchEvents()
    /*setTimeout(() => {
            //Call API
            try {
                setData(eventsJSON)
                setIsLoading(false)
                setError(null)
            } catch (error) {
                setError(error)
            }
        }, 3000)*/

    return {
        events: data?._embedded?.events || [],
        page: data?.page || {},
        isLoading,
        error,
        fetchEvents
    }

}

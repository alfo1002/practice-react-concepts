import { useEffect, useState } from 'react'
import eventsJSON from '../data/events.json'

export const useEventsData = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=Gq2uMPI6lfBZahnjxFfN5nbY0KBPuFAH&countryCode=MX')
                const data = await response.json()
                setData(data)
                setIsLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        fetchEvents()
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
    }, [])

    return {
        events: data?._embedded?.events || [],
        isLoading,
        error
    }

}

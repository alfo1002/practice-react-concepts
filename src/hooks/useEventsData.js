import { useEffect, useState } from 'react'
import eventsJSON from '../data/events.json'

export const useEventsData = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        setTimeout(() => {
            //Call API
            try {
                setData(eventsJSON)
                setIsLoading(false)
                setError(null)
            } catch (error) {
                setError(error)
            }
        }, 3000)
    }, [])

    return {
        events: data?._embedded?.events || [],
        isLoading,
        error
    }

}

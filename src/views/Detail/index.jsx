import styles from './Detail.module.css'
import { useEffect, useState } from "react"
import { set } from "react-hook-form"
import { useParams } from "react-router-dom"
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const Detail = () => {
    const { eventId } = useParams()
    const [eventData, setEventData] = useState({})
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    console.log('Detalle del evento desde Componente Detail:', eventId)
    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`)
                const data = await response.json()
                console.log('Data:', data)
                setEventData(data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error:', error)
                setEventData({})
                setError(error)
                setIsLoading(false)
            }
        }
        fetchEventData()
    }, [])

    if (isLoading && Object.keys(eventData) === 0) {
        return <div>Cargando Eventos...</div>
    }
    /* if (Object.keys(error)) {
        return <div>Hubo un error al cargar los eventos</div>
    } */

    return (
        <div className={styles.container}>
            <div className={styles.mainInfoContainer}>
                <img src={eventData.images?.[0].url} alt={eventData.name} className={styles.eventImage} />
                <h4 className={styles.eventName}>{eventData.name}</h4>
                <p className={styles.infoParagraph}>{eventData.info}</p>
                {eventData.dates?.start.dateTime ? <p className={styles.dateParagraph}>{format(new Date(eventData.dates?.start.dateTime), 'd LLLL yyyy H:mm', { locale: es })} hrs</p> : null}

            </div>
            <div className={styles.seatInfoContainer}>
                <h6 className={styles.seatMapTitle}>Mapa del Evento</h6>
                <img src={eventData.seatmap?.staticUrl} alt='Seatmap event' />
                <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
                <p className={styles.priceRangeLegend}>Rango de Precios:{eventData.priceRanges?.[0].min} - {eventData.priceRanges?.[0].max} {eventData.priceRanges?.[0].currency} </p>
            </div>
            <a href={eventData.url}>
                Ir por tus boletos
            </a>
        </div>
    )
}

export default Detail
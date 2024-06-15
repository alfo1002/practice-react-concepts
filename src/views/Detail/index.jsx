import { useParams } from "react-router-dom"

const Detail = () => {
    const { eventId } = useParams()
    console.log('Detalle del evento desde Componente Detail:', eventId)
    return <div>Detail</div>
}

export default Detail
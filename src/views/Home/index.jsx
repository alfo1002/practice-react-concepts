import { useEffect, useRef, useState } from "react"
import { Navbar } from "../../components/Navbar"
import { Events } from "../../components/Events/Events"
import { SignupForm } from "../../components/SignupForm/SignupForm"
import { useEventsData } from "../../hooks/useEventsData"

export const Home = () => {
    const { events, isLoading, error, fetchEvents } = useEventsData()
    const [searchTerm, setSearchTerm] = useState('')
    const containerRef = useRef()

    useEffect(() => {
        fetchEvents()
    }, [])

    const handleNavbarSearch = (term) => {
        console.log(containerRef.current)
        console.log('termino enviado desde el hijo:', term)
        setSearchTerm(term)
        fetchEvents(`&keyword=${term}`)
    }

    return (
        <>
            <p>App</p>
            <SignupForm />
            <hr />
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {isLoading ? <div>Cargando eventos...</div> : <Events searchTerm={searchTerm} events={events} />}
            {!!error && <div>Error: {error.message}</div>}

        </>
    )
}

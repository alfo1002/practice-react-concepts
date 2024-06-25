import { useEffect, useRef, useState, useCallback } from "react"
import { Navbar } from "../../components/Navbar"
import { Events } from "../../components/Events/Events"
import { SignupForm } from "../../components/SignupForm/SignupForm"
import { useEventsData } from "../../hooks/useEventsData"
import ReactPaginate from 'react-paginate'
import styles from './Home.module.css'
import useEventsResults from "../../state/events-results"


export const Home = () => {
    //Llamada a la API para obtener los eventos (metodo anterior)
    //const { events, isLoading, error, fetchEvents, page } = useEventsData()

    //Llamada al store de zustand
    const { data, isLoading, error, fetchEvents } = useEventsResults()
    const events = data?._embedded?.events || []
    const page = data?.page || {}
    const [searchTerm, setSearchTerm] = useState('')
    const containerRef = useRef()
    const [isToggle, setIsToogle] = useState(false)

    useEffect(() => {
        console.log('page:', page)
        fetchEvents()
    }, [])

    const handleNavbarSearch = (term) => {
        console.log(containerRef.current)
        console.log('termino enviado desde el hijo:', term)
        setSearchTerm(term)
        fetchEvents(`&keyword=${term}`)
    }

    const handlePageClick = useCallback(({ selected }) => {
        console.log('selected:', selected)
        fetchEvents(`&keyword=${searchTerm}&page=${selected}&size=3`)
    }, [searchTerm, fetchEvents])

    const renderEvents = () => {
        if (isLoading) {
            return <div>Cargando eventos...</div>
        }
        if (error) {
            return <div>Error: {error.message}</div>
        }
        return (
            <div>
                <button onClick={() => setIsToogle(!isToggle)}>{isToggle ? 'ON' : 'OFF'}</button>
                <Events searchTerm={searchTerm} events={events} />
                <ReactPaginate
                    className={styles.pagination}
                    nextClassName={styles.next}
                    previousClassName={styles.previous}
                    pageClassName={styles.page}
                    activeClassName={styles.activePage}
                    disabledClassName={styles.disabledPage}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={page?.totalPages}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        )
    }

    return (
        <>
            <p>App</p>
            <SignupForm />
            <hr />
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {renderEvents()}
        </>
    )
}

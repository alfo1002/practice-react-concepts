import { useEffect, useRef, useState } from "react"
import { Navbar } from "../../components/Navbar"
import { Events } from "../../components/Events/Events"
import { SignupForm } from "../../components/SignupForm/SignupForm"
import { useEventsData } from "../../hooks/useEventsData"
import ReactPaginate from 'react-paginate'
import styles from './Home.module.css'


export const Home = () => {
    const { events, isLoading, error, fetchEvents, page } = useEventsData()
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

    const handlePageClick = ({ selected }) => {
        console.log('selected:', selected)
        fetchEvents(`&keyword=${searchTerm}&page=${selected}&size=3`)
    }

    const renderEvents = () => {
        if (isLoading) {
            return <div>Cargando eventos...</div>
        }
        if (error) {
            return <div>Error: {error.message}</div>
        }
        return (
            <div>
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
                    pageCount={page.totalPages}
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

import { useRef, useState } from "react"
import { Navbar } from "../../components/Navbar"
import { Events } from "../../components/Events/Events"
import { SignupForm } from "../../components/SignupForm/SignupForm"

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const containerRef = useRef()
    const handleNavbarSearch = (term) => {
        console.log(containerRef.current)
        console.log('termino enviado desde el hijo:', term)
        setSearchTerm(term)
    }

    return (
        <>
            <p>App</p>
            <SignupForm />
            <hr />
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            <Events searchTerm={searchTerm} />

        </>
    )
}

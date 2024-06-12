import { useState, useEffect, forwardRef } from "react"

export const Navbar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState('')

    useEffect(() => {
        console.log('Navbar montado')
    }, [search, onSearch])

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }
    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('Buscar:', search)
            onSearch(search)
        }
    }

    return (
        <div ref={ref}>
            <p>Eventos</p>
            <input type="text" placeholder="Buscar eventos" onChange={handleInputChange} onKeyDown={handleInputKeyDown} />
        </div>
    )
})

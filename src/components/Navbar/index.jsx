import { useState } from "react"

export const Navbar = ({ onSearch }) => {
    const [search, setSearch] = useState('')
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
        <div>
            <p>Eventos</p>
            <input type="text" placeholder="Buscar eventos" onChange={handleInputChange} onKeyDown={handleInputKeyDown} />
        </div>
    )
}

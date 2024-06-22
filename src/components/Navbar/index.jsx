import { useState, useEffect, forwardRef } from "react"
import { Link } from "react-router-dom"

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
        <div ref={ref} style={{ marginBottom: 14, width: '100%', display: 'flex' }}>
            <div style={{ flex: 1, display: 'flex' }}>
                <p style={{ fontSize: 24, fontWeight: 'bold' }}>
                    Eventos
                </p>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <input
                    type="text" placeholder="Buscar eventos"
                    onChange={handleInputChange} onKeyDown={handleInputKeyDown}
                    value={search}
                    style={{
                        fontSize: 14,
                        padding: '6px 12px',
                        borderRadius: 4,
                        border: 'none',
                        width: 200,
                    }}
                />
                <Link to="/profile" style={{
                    marginLeft: 24, color: '#fff', textDecoration: 'none'
                }}>Mi Perfil</Link>
            </div>
        </div >
    )
})

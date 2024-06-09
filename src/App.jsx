import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Events } from './components/Events/Events'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const handleNavbarSearch = (term) => {
    console.log('termino enviado desde el hijo:', term)
    setSearchTerm(term)
  }

  return (
    <>
      <p>App</p>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} />
    </>
  )
}

export default App

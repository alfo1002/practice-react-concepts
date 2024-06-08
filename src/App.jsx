import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { ListRendering } from './components/General/ListRendering'

function App() {

  return (
    <>
      <p>App</p>
      <Navbar />
      <ListRendering />
    </>

  )
}

export default App

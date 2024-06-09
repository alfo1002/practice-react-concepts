import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { ListRendering } from './components/General/ListRendering'
import { Events } from './components/Events/Events'

function App() {

  return (
    <>
      <p>App</p>
      <Navbar />
      <Events />
    </>

  )
}

export default App

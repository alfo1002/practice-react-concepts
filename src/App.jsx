import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { ConditionalRendering } from './components/General/ConditionalRendering'

function App() {

  return (
    <>
      <p>App</p>
      <Navbar />
      <ConditionalRendering />
    </>

  )
}

export default App

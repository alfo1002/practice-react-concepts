import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyFirstComponent } from './MyFirstComponent'

function App() {
  const [count, setCount] = useState(0)

  setTimeout(() => {
    setCount(count + 1)
  }, 5000)

  return (
    <>
      <p>El contador es {count}</p>
      <MyFirstComponent valor={count} />
    </>

  )
}

export default App

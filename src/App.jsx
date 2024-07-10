import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Views from './components/Views'
import Add from './components/Add'
import Records from './components/Records'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to FSD Internship!!!</h1>
      <Views/>
      <br />
      <Add/>
      <br />
      <Records/>
    </>
  )
}

export default App

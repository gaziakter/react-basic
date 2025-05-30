import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Header'
import About from './About'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Home></Home>
      <About></About>
      <Contact></Contact>
    </>
  )
}

export default App

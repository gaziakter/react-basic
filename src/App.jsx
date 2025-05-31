import { useState } from 'react'
import './App.css'
import Service from './components/Services/Service'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Service></Service>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Service from './components/Services/Service'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Service name='Gazi Akter'></Service>
      <Service name='Zakir Hossain'></Service>
      <Service name='Alauddin Hoque'></Service>
      <Service name='Faterma Akter'></Service>
      <Service name='Moni Akter'></Service>
    </>
  )
}

export default App

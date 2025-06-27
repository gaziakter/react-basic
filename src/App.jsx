import { useState } from 'react'
import './App.css'
import { Context1 } from './Contexts/context1'
import Home from './components/Pages/Home/Home'

function App() {

  const [a, SetA] = useState('Hello World');

  return (
    <div>
      <Context1.Provider value={[a, SetA]}>
        <Home></Home>
      </Context1.Provider>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [allData, setAllData] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setAllData(data))
  }, [])


  return (
    <div>
    <h1>Total Data: {allData.length}</h1>
    {allData.map(singeData => <p>{singeData.name}</p>)}
    </div>
  )
}

export default App

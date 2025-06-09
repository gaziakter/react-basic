import { useEffect, useState } from 'react'
import './App.css'
import User from './components/User/User';


function App() {

  const [allData, setAllData] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setAllData(data))
  }, [])


  return (
    <div>
    {allData.map(singeData => <User singeData = {singeData}></User>)}
    </div>
  )
}

export default App

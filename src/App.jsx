import React, { useEffect, useState } from 'react'
import SingleDate from './component/SingleDate';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(dataStore =>setData(dataStore))
  }, []);

  return (
    <div>
    {data.map(allData => <SingleDate key = {allData.id} allData ={allData}></SingleDate>)}
    </div>
  )
}

export default App
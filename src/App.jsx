import { useState } from 'react'
import './App.css'



function App() {

  const[price, setPrice]= useState(0);

  const increasePrice = () => {
    const newPrice = price +1;

    setPrice(newPrice);
  }

  const decreasePrice = () => {
    const newPrice = price -1;

    setPrice(newPrice);
  }

  return (
    <div>
      <h1>Price: {price}</h1>
      <h2>Price: {price}</h2>
      <h3>Price: {price}</h3>
      <h4>Price: {price}</h4>
      <h5>Price: {price}</h5>
      <button onClick={increasePrice}>Increase</button>
      <button onClick={decreasePrice}>Decrease</button>
    </div>
  )
}

export default App

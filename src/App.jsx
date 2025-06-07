import { useState } from 'react'
import './App.css'
import Product from './components/Product/Product'


function App() {
    const products = ['Dhaka', 'Cumilla']

  return (
    <div>
      <Product products = {products}></Product>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import Product from '../Products/Product'
import Placement from '../Placement/Placement'

const Main = () => {

  const [addCart, setAddCart] = useState([]);

  const cartData = (placement) => {
    const newPlacement = [...addCart, placement];

    setAddCart(newPlacement);
    
  }
  
  return (
    <div>
        <Product cartData ={cartData}></Product>
        <Placement addCart={addCart}></Placement>
    </div>
  )
}

export default Main
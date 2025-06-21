import React, { useEffect, useState } from 'react'
import ProductView from './ProductView';
import './product.css'

const Product = ({cartData}) => {
   const [product, setProduct] = useState([]);

   useEffect(() => {
    fetch('product.json')
    .then(res => res.json())
    .then(productData => setProduct(productData))
   }, [])
  return (
  <div className="product">
    
    {/* Product Grid */}
    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {product.map(allProduct => (
        <ProductView cartData={cartData} key={allProduct.id} allProduct={allProduct} />
      ))}
    </div>
  </div>
  )
}

export default Product
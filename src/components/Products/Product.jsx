import React, { useEffect, useState } from 'react'
import ProductView from './ProductView';

const Product = () => {
   const [product, setProduct] = useState([]);

   useEffect(() => {
    fetch('product.json')
    .then(res => res.json())
    .then(productData => setProduct(productData))
   }, [])
  return (
    <div className='container mx-auto px-4 pt-5'>
        <h1 className='text-4xl font-bold text-center text-gray-800 my-8'>Products</h1>
        <div className='grid grid-cols-3 gap-4'>
        {product.map(allProduct => <ProductView key={allProduct.id} allProduct={allProduct}></ProductView>)}
        </div>
    </div>
  )
}

export default Product
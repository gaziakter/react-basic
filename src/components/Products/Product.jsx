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
<div className="container mx-auto px-4 pt-5">
  <h1 className="text-4xl font-bold text-center text-gray-800 my-8">Products</h1>

  {/* Main content and sidebar wrapper */}
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    
    {/* Product Grid */}
    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {product.map(allProduct => (
        <ProductView key={allProduct.id} allProduct={allProduct} />
      ))}
    </div>

    {/* Right Sidebar */}
    <aside className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Filter by Category</h3>
        <ul className="space-y-1 text-gray-600">
          <li><a href="#" className="hover:text-black">Electronics</a></li>
          <li><a href="#" className="hover:text-black">Fashion</a></li>
          <li><a href="#" className="hover:text-black">Home & Kitchen</a></li>
        </ul>
      </div>
    </aside>
  </div>
</div>

    
  )
}

export default Product
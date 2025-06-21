import React from 'react'

const ProductView = ({allProduct, cartData}) => {
  const{name, category, description, price}  = allProduct;
  return (
    <div>



 <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">

      <div className="p-4">
        <div className="font-bold text-xl mb-2 text-gray-800 line-clamp-2" title={name}>
          {name}
        </div>
        <p className="text-sm text-gray-600 mb-2">{category}</p>
        <p className="text-gray-700 text-base mb-3 line-clamp-3">
          {description}
        </p>

        {/* Price Section */}
        <div className="flex items-baseline mb-2">
          {price && (
            <>
              <span className="text-2xl font-bold text-indigo-600">
                {price.currency}{price.amount.toFixed(2)}
              </span>
              {/* Add a discount indicator if needed in your JSON */}
              {/* <span className="ml-2 text-sm text-gray-500 line-through">
                $300.00
              </span> */}
            </>
          )}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button onClick={()=>cartData(allProduct)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            Add to Cart
          </button>
          <button className="text-indigo-600 hover:text-indigo-800 font-semibold py-2 px-4 rounded-full transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ProductView
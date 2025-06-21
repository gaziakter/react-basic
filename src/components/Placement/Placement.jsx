import React from 'react'
import './placement.css'

const Placement = ({addCart}) => {
  return (
    <div className="placement">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Placement Data</h3>
        <ul className="space-y-1 text-gray-600">
          {addCart.map(data => (<li key={data.product_id}>{data.name}</li>))}
        </ul>
      </div>
    </div>
  )
}

export default Placement
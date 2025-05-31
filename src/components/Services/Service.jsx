import React from 'react'
import './Service'

const Service = (props) => {

 const objectStyle = {
    border: '1px solid #000',
    padding: '5px 40px',
    borderRadius: '5px',
    marginBottom: '15px',
 }

  return (
    <div style={objectStyle}>
    <h1>Service page</h1>
    <p>Name: {props.name}</p>
    </div>
  )
}

export default Service
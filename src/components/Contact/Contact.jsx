import React from 'react'
import './Contact.css'

const Contact = () => {

  const colorStyle = {
    backgroundColor: 'red',
  }

  return (
    <div>
    <h1 style={colorStyle}>Contact</h1>
    <button className='contact-btn'>Click here</button>
    </div>
  )
}

export default Contact
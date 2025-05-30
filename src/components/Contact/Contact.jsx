import React from 'react'
import './Contact.css'

const Contact = () => {

  function update(){
    alert('Hello Bangladesh!')
  }
  return (
    <div>
    <h1 className='contact'>Contact</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus, quia cum odit cumque itaque. Inventore consequuntur repellendus suscipit, eveniet neque quisquam, vero porro quas voluptates excepturi temporibus magnam accusantium!
    </p>
    <button onClick={update} className='contact-btn'>Click here</button>
    </div>
  )
}

export default Contact
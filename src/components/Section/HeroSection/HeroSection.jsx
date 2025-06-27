import React, { useContext } from 'react'
import { Context1 } from '../../../Contexts/context1';

const HeroSection = () => {

  const [a, SetA] = useContext(Context1);

  return (
    <div>
      <h1>Hero Section</h1>
      <p>{a}</p>
    </div>
  )
}

export default HeroSection
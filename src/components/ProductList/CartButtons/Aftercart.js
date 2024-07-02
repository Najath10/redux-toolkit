import React from 'react'
import "./CartButtons.css"
const Aftercart = () => {
  return (
    <div className='after-cart'>
        <button className="cart-counter-btn"></button>
      <div className='cart-count'>1</div>
      <button className='cart-counter-btn'>+</button>
    </div>
  )
}

export default Aftercart

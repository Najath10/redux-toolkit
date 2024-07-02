import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <header>
    <div className='container'>
      <h1>Debug Media</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="32" width='32' cursor='pointer' fill='white'>
            <path d="M7 4h-2l-2 12h16l2-12h-14zm11.508 10h-12.277l1.4-8h9.478l1.399 8zm-2.508 5c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zm-10 0c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z"/>
        </svg>


    </div>
    </header>
  )
}

export default Header

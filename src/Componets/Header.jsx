import './header.css'
import React from 'react'

function Header() {
  return (
   <div className='header-container'>
        <div className='logo'> 
            ResemeBuilder
        </div>
        <ul className='nav--header'>
            <li>About</li>
            <li>Templates</li>
        </ul>
    </div>
  )
}

export default Header
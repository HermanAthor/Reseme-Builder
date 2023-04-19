
import { Link } from 'react-router-dom'
import './header.css'
import React from 'react'

function Header() {
  return (
   <div className='header-container'>
        <Link to='/'>
          <div className='logo'> 
              ResemeBuilder
          </div>
        </Link>
        <ul className='nav--header'>
            <Link to='/'><li>About</li></Link>
            <Link to='/templates'><li>Templates</li></Link>
        </ul>
    </div>
  )
}

export default Header
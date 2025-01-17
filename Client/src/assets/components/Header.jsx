import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/" className='logo'>MyLogo</Link>
        <nav>
          <Link to="/login">LogIn</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
  )
}

export default Header
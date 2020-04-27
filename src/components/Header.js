import React, { useEffect } from 'react'

import {
  Link
  // useLocation
} from 'react-router-dom'

const Header = () => {

  // Dynamic detect current pathname.
  // Use this template to customize/disable header for some routes

  // const location = useLocation()
  // if (location.pathname === '/dashboard') {
  //   return null
  // }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header

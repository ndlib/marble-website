import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'
const Header = () => {
  return (
    <NavLink to='/'>
      <div id='Header' className='Header'>
        <p>UNIVERSITY <i>of</i> NOTRE DAME</p>
      </div>
    </NavLink>
  )
}

export default Header

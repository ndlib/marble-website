import React from 'react'

import SiteLogo from './SiteLogo'
import Hamburger from './Hamburger'
import './style.css'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='navBarInner'>
        <SiteLogo />
        <Hamburger />
        <div className='LoginButton'><button>Login</button></div>
      </div>
    </div>
  )
}

export default NavBar

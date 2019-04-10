import React from 'react'
import { withRouter } from 'react-router'
import SiteLogo from './SiteLogo'
import Hamburger from './Hamburger'
import LoginButton from './LoginButton'
import './style.css'

export const NavBar = () => {
  return (
    <header className='navBar'>
      <div className='navBarInner'>
        <SiteLogo />
        <Hamburger />
        <LoginButton />
      </div>
    </header>
  )
}

export default withRouter(NavBar)

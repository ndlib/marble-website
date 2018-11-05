import React from 'react'
import { Link } from 'react-router-dom'
import {
  SITE_LOGO,
  SITE_LOGO_ALT_TEXT,
} from 'Configurations/customizations'
import './style.css'

const SiteLogo = () => {
  return (
    <div className='siteTitle'>
      <Link to='/'>
        <img
          className='siteLogo'
          alt={SITE_LOGO_ALT_TEXT}
          src={SITE_LOGO}
        />
      </Link>
    </div>
  )
}

export default SiteLogo

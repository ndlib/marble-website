import React from 'react'
import { Link } from 'react-router-dom'
import {
  SITE_LOGO,
  SITE_LOGO_ALT_TEXT,
  SITE_LOGO_WIDTH,
  SITE_LOGO_HEIGHT,
} from 'Configurations/customizations'

const SiteLogo = () => {
  return (
    <div className='siteTitle'>
      <Link to='/'>
        <img
          alt={SITE_LOGO_ALT_TEXT}
          src={SITE_LOGO}
          style={{
            height: SITE_LOGO_HEIGHT,
            width: SITE_LOGO_WIDTH,
            margin: '10px 0',
          }}
        />
      </Link>
    </div>
  )
}

export default SiteLogo

import React from 'react'
import {
  INSTITUTION_LOGO,
  INSTITUTION_LOGO_ALT_TEXT,
  INSTITUTION_LOGO_HEIGHT,
  INSTITUTION_LOGO_WIDTH,
  INSTITUTION_HOME_PAGE,
  DEPARTMENT_LOGO,
  DEPARTMENT_LOGO_ALT_TEXT,
  DEPARTMENT_LOGO_HEIGHT,
  DEPARTMENT_LOGO_WIDTH,
  DEPARTMENT_HOME_PAGE,
} from 'Configurations/customizations'

import './style.css'
const Header = () => {
  return (
    <div className='header'>
      <div className='headerInner'>
        <a href={INSTITUTION_HOME_PAGE}>
          <img
            src={INSTITUTION_LOGO}
            alt={INSTITUTION_LOGO_ALT_TEXT}
            style={{
              height: INSTITUTION_LOGO_HEIGHT,
              width: INSTITUTION_LOGO_WIDTH,
            }}
          />
        </a>
        <a
          href={DEPARTMENT_HOME_PAGE}
          className='departmentLogo'
        >
          <img
            src={DEPARTMENT_LOGO}
            alt={DEPARTMENT_LOGO_ALT_TEXT}
            style={{
              height: DEPARTMENT_LOGO_HEIGHT,
              width: DEPARTMENT_LOGO_WIDTH,
            }}
          />
        </a>
      </div>
    </div>

  )
}

export default Header

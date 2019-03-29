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
import HeaderImage from './HeaderImage'
import './style.css'
const Header = () => {
  return (
    <header className='header'>
      <div className='headerInner'>
        <HeaderImage
          image={INSTITUTION_LOGO}
          altText={INSTITUTION_LOGO_ALT_TEXT}
          imageHeight={INSTITUTION_LOGO_HEIGHT}
          imageWidth={INSTITUTION_LOGO_WIDTH}
          linkPath={INSTITUTION_HOME_PAGE}
        />
        <HeaderImage
          className='departmentLogo'
          image={DEPARTMENT_LOGO}
          altText={DEPARTMENT_LOGO_ALT_TEXT}
          imageHeight={DEPARTMENT_LOGO_HEIGHT}
          imageWidth={DEPARTMENT_LOGO_WIDTH}
          linkPath={DEPARTMENT_HOME_PAGE}
        />
      </div>
    </header>

  )
}

export default Header

import React from 'react'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router'
import './style.css'

import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import SearchBox from 'Components/Shared/SearchBox'

export const Page = ({ children, location }) => {
  // create a css class for page based on url
  const pageClass = location.pathname == '/' ? 'home' : location.pathname.substring(1).replace('/', ' ')
  return (
    <div className={pageClass}>
      <Header />
      <NavBar />
      <div className='mainContent'>
        <SearchBox />
        {children}
      </div>
      <Footer />
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  location: PropTypes.object.isRequired,
}
export default withRouter(Page)

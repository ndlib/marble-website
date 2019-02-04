import React from 'react'
import { PropTypes } from 'prop-types'
import './style.css'

import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import SearchBox from 'Components/Shared/SearchBox'

const Page = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <div className='mainContent'>
        <SearchBox />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
}
export default Page

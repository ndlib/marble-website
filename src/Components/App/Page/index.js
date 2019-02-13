import React from 'react'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router'
import './style.css'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

export const Page = ({ children, location }) => {
  const contentClass = location.pathname === '/' ? 'home mainContent' : 'mainContent'

  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <div className={contentClass}>
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
  location: PropTypes.object.isRequired,
}
export default withRouter(Page)

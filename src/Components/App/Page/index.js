import React from 'react'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router'
import './style.css'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import {
  BROWSE_CONTEXT,
  COLLECTION_CONTEXT,
  ITEM_CONTEXT,
  VIEWER_CONTEXT,
  EXHIBITIONS_CONTEXT,
  SEARCH_CONTEXT,
} from 'Constants/viewingContexts'

export const Page = ({ children, location }) => {
  const contentClass = getClass(location.pathname)

  return (
    <React.Fragment>
      <a className='skipToMain' href='#main'>Skip to main content</a>
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
// eslint-disable-next-line complexity
export const getClass = (pathname) => {
  let contentClass
  if (pathname === '/') {
    contentClass = 'home mainContent'
  } else if (pathname.indexOf(BROWSE_CONTEXT) === 1) {
    contentClass = 'browse mainContent'
  } else if (pathname.indexOf(COLLECTION_CONTEXT) === 1) {
    contentClass = 'collection mainContent'
  } else if (pathname.indexOf(ITEM_CONTEXT) === 1) {
    contentClass = 'item mainContent'
  } else if (pathname.indexOf(VIEWER_CONTEXT) === 1) {
    contentClass = 'viewer mainContent'
  } else if (pathname.indexOf(EXHIBITIONS_CONTEXT) === 1) {
    contentClass = 'exhibitions mainContent'
  } else if (pathname.indexOf(SEARCH_CONTEXT) === 1) {
    contentClass = 'search mainContent'
  } else {
    contentClass = 'mainContent'
  }
  return contentClass
}

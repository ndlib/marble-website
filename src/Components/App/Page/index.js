import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { INNER_PAGE_WIDTH } from 'Configurations/styles'
import './style.css'

import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

class Page extends Component {
  componentDidUpdate (prevProps) {
  // reset page to top after navigation
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <div
          className='mainContent'
          style={{ width: INNER_PAGE_WIDTH || '75vw' }}
        >
          {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  location: PropTypes.object,
}
export default Page

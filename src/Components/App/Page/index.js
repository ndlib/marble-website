import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

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
      <div>
        <Header />
        <NavBar />
        <div className='mainContent'>
          {this.props.children}
        </div>
        <Footer />
      </div>
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

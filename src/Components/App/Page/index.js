import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import { INNER_PAGE_WIDTH } from 'Configurations/styles'
import './style.css'
class Page extends Component {
  componentDidUpdate (prevProps) {
  // reset page to top after navigation
    if (this.props.location !== prevProps.loction) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    console.log(INNER_PAGE_WIDTH)
    return (
      <React.Fragment>
        <div>This is a header</div>
        <div
          className='mainContent'
          style={{ width: INNER_PAGE_WIDTH || '75vw' }}
        >
          {this.props.children}
        </div>
        <div> This is a footer</div>
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

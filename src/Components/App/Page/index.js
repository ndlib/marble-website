import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Page extends Component {
  componentDidUpdate (prevProps) {
  // reset page to top after navigation
    if (this.props.location !== prevProps.loction) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return (
      <div>
        <div>This is a header</div>
        {this.props.children}
        <div> This is a footer</div>
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

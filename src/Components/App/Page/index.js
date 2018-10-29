import React, { Component } from 'react'

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

export default Page

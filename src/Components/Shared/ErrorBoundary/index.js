import { Component } from 'react'
<<<<<<< HEAD:src/Components/Shared/ErrorBoundary/index.js
import { PropTypes } from 'prop-types'
=======
import PropTypes from 'prop-types'
>>>>>>> UI showing first page of results in place:src/Components/ErrorBoundary/index.js

class ErrorBoundary extends Component {
  static get propTypes () {
    return {
      children: PropTypes.any,
    }
  }

  constructor (props) {
    super(props)
    this.state = { hasCatastrophicError: false }
  }

  componentDidCatch (error, info) {
    this.setState({ hasCatastrophicError: true })
    console.log('Hit an error boundary: ', error, info)
  }

  // If nothing is broken return unaltered component.
  render () {
    if (this.state.hasCatastrophicError) {
      return null
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
}

export default ErrorBoundary

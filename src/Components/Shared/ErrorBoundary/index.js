import { Component } from 'react'
import { PropTypes } from 'prop-types'
import * as Sentry from '@sentry/browser'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasCatastrophicError: false }
  }

  componentDidCatch (error, info) {
    this.setState({ hasCatastrophicError: true })
    console.error('Hit an error boundary: ', error, info)
    Sentry.withScope(scope => {
      Object.keys(error).forEach(key => {
        scope.setExtra(key, error[key])
      })
      Sentry.captureException(error)
    })
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

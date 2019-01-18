import React from 'react'
import PropTypes from 'prop-types'

const NotFound = ({ title, message }) => {
  return (
    <React.Fragment>
      <h1>{title || 'Not Found'}</h1>
      <div>{message || 'The page you requested could not be found.'}</div>
    </React.Fragment>
  )
}

NotFound.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
}
export default NotFound

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const DisplayViewClass = ({ children, reducer }) => {
  const { view } = reducer
  return (
    <div className={view}>
      {children}
    </div>
  )
}

DisplayViewClass.propTypes = {
  children: PropTypes.node.isRequired,
  reducer: PropTypes.object.isRequired,
}

export default DisplayViewClass

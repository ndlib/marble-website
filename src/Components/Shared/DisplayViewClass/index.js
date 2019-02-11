import React from 'react'
import PropTypes from 'prop-types'

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

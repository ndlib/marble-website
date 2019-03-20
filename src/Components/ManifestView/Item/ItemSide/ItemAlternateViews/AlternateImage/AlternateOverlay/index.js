import React from 'react'
import PropTypes from 'prop-types'

const AlternateOverlay = ({ index, max, length }) => {
  if (max === index + 1 && max !== length) {
    const overlayNumber = length - max
    return (
      <div className='alternateOverlay'>+{overlayNumber}</div>
    )
  }
  return null
}
AlternateOverlay.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}
export default AlternateOverlay

import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const AlternateImage = ({ image, index }) => {
  return (
    <div className='alternateImage'>
      <img
        src={image}
        alt={`Alternate View ${index}`}
      />
    </div>
  )
}

AlternateImage.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default AlternateImage

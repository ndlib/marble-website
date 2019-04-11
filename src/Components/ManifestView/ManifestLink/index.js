import React from 'react'
import PropTypes from 'prop-types'
import imgIIIF from './iiif.png'
import './style.css'

const ManifestLink = ({ manifestUrl }) => {
  if (!manifestUrl) {
    return null
  }
  return (
    <a
      href={manifestUrl}
      target='_blank'
    >
      <img
        src={imgIIIF}
        alt='Download IIIF manifest.'
        className='manifestLink'
      />
    </a>
  )
}

ManifestLink.propTypes = {
  manifestUrl: PropTypes.string.isRequired,
}
export default ManifestLink

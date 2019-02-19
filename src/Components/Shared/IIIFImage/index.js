import React from 'react'
import PropTypes from 'prop-types'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'

const IIIFImage = ({ image, settings }) => {
  console.log(image, settings)
  let imageUrl = image['@id']
  if (image.service) {

  }
  return (
    <img
      src={imageUrl || DEFAULT_ITEM_IMAGE}
      alt={settings.alt}
    />
  )
}

IIIFImage.propTypes = {
  image: PropTypes.object.isRequired,
  settings: PropTypes.object,
}

export default IIIFImage

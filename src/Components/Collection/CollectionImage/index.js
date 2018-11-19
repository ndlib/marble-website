import React from 'react'
import PropTypes from 'prop-types'
import { DEFAULT_COLLECTION_IMAGE } from 'Configurations/customizations'
import './style.css'
const CollectionImage = ({ image, altText }) => {
  return (
    <div className='collectionImage'>
      <img
        src={image || DEFAULT_COLLECTION_IMAGE}
        alt={altText || 'Collection Image'}
      />
    </div>

  )
}
CollectionImage.propTypes = {
  image: PropTypes.string,
  altText: PropTypes.string,
}
export default CollectionImage

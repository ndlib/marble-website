import React from 'react'
import PropTypes from 'prop-types'
import IIIFImage from 'Components/Shared/IIIFImage'
import './style.css'
const CollectionImage = ({ image, altText }) => {
  return (
    <div className='collectionImage'>
      <IIIFImage
        image={image}
        alt={altText || 'Collection'}
        previewBlur
        srcSetOnLoad
      />
    </div>

  )
}
CollectionImage.propTypes = {
  image: PropTypes.object.isRequired,
  altText: PropTypes.string,
}
export default CollectionImage

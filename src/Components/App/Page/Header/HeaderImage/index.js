import React from 'react'
import PropTypes from 'prop-types'
const HeaderImage = ({
  className,
  image,
  altText,
  imageHeight,
  imageWidth,
  linkPath,
}) => {
  return (
    <a href={linkPath} className={className}>
      <img
        src={image}
        alt={altText}
        style={{
          height: imageHeight,
          width: imageWidth,
        }}
      />
    </a>
  )
}
HeaderImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  imageHeight: PropTypes.string.isRequired,
  imageWidth: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
}
export default HeaderImage

import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import noImage from 'Configurations/Logos/no.image.svg'

const ResultThumbnail = ({ doc }) => {
  const image = imageFromDoc(doc)
  return (
    <img
      src={image}
      alt='thumbnail'
      className='thumbnail'
    />
  )
}

// return valid thumbnail
const imageFromDoc = (doc) => {
  const link = typy(doc, 'delivery.link').safeObject.find((link) => {
    return link.linkURL.includes('JPG&client=primo')
  }) || {}

  if (!link.linkURL) {
    link.linkURL = noImage
  }
  return link.linkURL
}

ResultThumbnail.propTypes = {
  doc: PropTypes.object.isRequired,
}

export default ResultThumbnail

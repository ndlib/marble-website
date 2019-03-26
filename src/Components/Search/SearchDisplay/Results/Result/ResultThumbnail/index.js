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
export const imageFromDoc = (doc) => {
  let link = {}
  if (typy(doc, 'delivery.link').isArray) {
    link = doc.delivery.link.find(
      (l) => {
        return l.linkType === 'http://purl.org/pnx/linkType/thumbnail'
      }
    ) || {}
  }

  if (!link.linkURL) {
    link.linkURL = noImage
  }
  return link.linkURL
}

ResultThumbnail.propTypes = {
  doc: PropTypes.object.isRequired,
}

export default ResultThumbnail

import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import bookIMG from './book.svg'
import fileIMG from './file.svg'

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
    switch (doc['@TYPE']) {
      case 'book':
        link.linkURL = bookIMG
        break
      default:
        link.linkURL = fileIMG
    }
  }
  return link.linkURL
}

ResultThumbnail.propTypes = {
  doc: PropTypes.object.isRequired,
}

export default ResultThumbnail

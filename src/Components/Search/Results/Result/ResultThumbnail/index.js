import React from 'react'
import PropTypes from 'prop-types'
import bookIMG from './book.svg'
import fileIMG from './file.svg'

const ResultThumbnail = ({ doc, thumbnailAvailable }) => {
  if (doc.delivery.link.find(thumbnailAvailable)) {
    return (
      <img
        src={doc.delivery.link.find(thumbnailAvailable).linkURL}
        alt='thumbnail'
        className='thumbnail'
      />

    )
  }
  return (
    <img src={doc['@TYPE'] === 'book' ? bookIMG : fileIMG} alt='thumbail'
      className='thumbnail'
    />

  )
}

ResultThumbnail.propTypes = {
  doc: PropTypes.object.isRequired,
  thumbnailAvailable: PropTypes.func.isRequired,
}

export default ResultThumbnail

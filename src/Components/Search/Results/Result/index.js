import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import ResultThumbnail from './ResultThumbnail'
import ResultMetaData from './ResultMetaData'

const Result = ({ doc, thumbnailAvailable, page, perpage, index }) => {
  let metadata = [
    { label: 'Owner', value: 'Special Collections' },
    { label: 'Creator', value: typy(doc, 'creator[0]').safeString },
    { label: 'Date', value: typy(doc, 'date').safeString },
    { label: 'Format', value: doc['@TYPE'] },
  ]

  if (typy(doc, 'delivery.holding[0].subLocation').safeObject) {
    metadata.push({
      label: 'Collection',
      value: doc.delivery.holding[0].subLocation,
    })
  }

  return (
    <div className='resultEntry'>
      <ResultThumbnail
        doc={doc}
        thumbnailAvailable={thumbnailAvailable}
      />
      <span className='resultnum'>{ (perpage * (page - 1)) + index + 1 }</span>
      <h2>{doc.title}</h2>
      <ResultMetaData metadata={metadata} />
      <div className='description'>{doc.description}</div>
    </div>
  )
}

Result.propTypes = {
  doc: PropTypes.object.isRequired,
  thumbnailAvailable: PropTypes.func.isRequired,
  page: PropTypes.number,
  perpage: PropTypes.number,
  index: PropTypes.number,
}
export default Result

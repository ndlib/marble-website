import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import ResultIndex from './ResultIndex'
import ResultThumbnail from './ResultThumbnail'
import ResultMetaData from './ResultMetaData'

export const Result = ({ doc, index }) => {
  let metadata = buildMetadata(doc)

  return (
    <div className='resultEntry'>
      <ResultThumbnail
        doc={doc}
      />
      <ResultIndex index={index} />
      <div className='itemData'>
        <h2>{doc.title}</h2>
        <ResultMetaData metadata={metadata} />
        <div className='description'>{doc.description}</div>
      </div>
    </div>
  )
}

Result.propTypes = {
  doc: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export const buildMetadata = (doc) => {
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
  return metadata
}

export default Result

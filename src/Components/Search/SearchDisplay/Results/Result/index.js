import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
// import ResultIndex from './ResultIndex'
import { imageFromDoc } from './ResultThumbnail'
import ResultMetaData from './ResultMetaData'
import Card from 'Components/Shared/Card'

const Result = ({ doc, index }) => {
  let metadata = buildMetadata(doc)

  return (
    <Card
      title={doc.title}
      image={imageFromDoc(doc)}
      // FIX ME: hard coding a url here
      // We need to determine what the manifest ID is and how to get it.
      url='/item/b19974760-5831'
    >
      <ResultMetaData metadata={metadata} />
      <div className='description'>{doc.description}</div>
    </Card>
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

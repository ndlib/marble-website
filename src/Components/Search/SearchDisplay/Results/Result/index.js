import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
// import ResultIndex from './ResultIndex'
import { imageFromDoc } from './ResultThumbnail'
import CardMetaData from 'Components/Shared/CardMetaData'
import Card from 'Components/Shared/Card'

const Result = ({ doc }) => {
  let metadata = buildMetadata(doc)
  let url = buildUrl(doc)
  return (
    <Card
      title={doc.title}
      image={imageFromDoc(doc)}
      url={url}
    >
      <CardMetaData metadata={metadata} />
      <div className='description'>{doc.description}</div>
    </Card>
  )
}

Result.propTypes = {
  doc: PropTypes.object.isRequired,
}

export const buildUrl = (doc) => {
  let id = null
  if (typy(doc, 'sourcerecordid').isString) {
    id = doc.sourcerecordid
  }
  return `/item/${id}`
}

export const buildMetadata = (doc) => {
  let metadata = [
    { label: 'Owner', value: typy(doc, 'delivery.bestlocation.subLocation').safeString },
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

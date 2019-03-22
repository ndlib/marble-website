import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
// import ResultIndex from './ResultIndex'
import { imageFromDoc } from './ResultThumbnail'
import CardMetaData from 'Components/Shared/CardMetaData'
import Card from 'Components/Shared/Card'

const Result = ({ doc }) => {
  const metadata = buildMetadata(doc)
  const url = buildUrl(doc)
  console.log(doc)
  return (
    <Card
      title={doc.pnx.display.title}
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
  if (typy(doc, 'pnx.control.sourcerecordid').isArray) {
    id = doc.pnx.control.sourcerecordid[0]
  }
  return `/item/${id}`
}

export const buildMetadata = (doc) => {
  const metadata = [
    { label: 'Creator', value: typy(doc, 'pnx.display.creator[0]').safeString },
    { label: 'Date', value: typy(doc, 'pnx.display.creationdate[0]').safeString },
    { label: 'Format', value: typy(doc, 'pnx.display.format[0]').safeString },
    { label: 'Repository', value: typy(doc, 'pnx.control.sourceid[0]').safeString },
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

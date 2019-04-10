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
  let subset = null
  let id = null

  if (typy(doc, 'pnx.control.sourcerecordid').isArray) {
    if (doc.pnx.control.sourcerecordid[0].endsWith('manifest')) {
      id = doc.pnx.control.sourcerecordid[0].split('/')
      subset = '/item/' + id[3]
    } else {
      id = doc.pnx.control.sourcerecordid[0].split('/')
      subset = '/collection/' + id[4]
    }
  }
  return subset
}

export const buildMetadata = (doc) => {
  let metadata = []
  if (typy(doc, 'pnx.display.creator[0]').isString) {
    metadata.push({ label: 'Creator', value: typy(doc, 'pnx.display.creator[0]').safeString })
  }
  if (typy(doc, 'pnx.display.creationdate[0]').isString) {
    metadata.push({ label: 'Date', value: typy(doc, 'pnx.display.creationdate[0]').safeString })
  }
  if (typy(doc, 'pnx.display.format[0]').isString) {
    metadata.push({ label: 'Format', value: typy(doc, 'pnx.display.format[0]').safeString })
  }
  if (typy(doc, 'pnx.control.sourceid[0]').isString) {
    metadata.push({ label: 'Repository', value: typy(doc, 'pnx.control.sourceid[0]').safeString })
  }
  if (typy(doc, 'delivery.holding[0].subLocation').isObject) {
    metadata.push({ label: 'Collection', value: typy(doc.delivery.holding[0].subLocation).safeObject })
  }
  return metadata
}

export default Result

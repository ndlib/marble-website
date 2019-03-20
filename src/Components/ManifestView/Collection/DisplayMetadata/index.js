import React from 'react'
import { PropTypes } from 'prop-types'
import MetaDataField from 'Components/Shared/MetaDataField'
const DisplayMetadata = ({ metadata }) => {
  if (metadata) {
    return metadata.map((meta) => {
      return (
        <MetaDataField metadata={meta} />
      )
    })
  }
  return null
}

export default DisplayMetadata

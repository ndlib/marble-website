import React from 'react'
import PropTypes from 'prop-types'
import MetaDataField from 'Components/Shared/MetaDataField'
import './style.css'

const ItemMetaData = ({ currentManifest }) => {
  const { metadata } = currentManifest.data
  return (
    <dl className='metaData'>
      {
        metadata.map(md => {
          return (
            <MetaDataField
              key={`${md.label}${md.value}`}
              metadata={md}
            />
          )
        })
      }
    </dl>
  )
}

ItemMetaData.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}

export default ItemMetaData

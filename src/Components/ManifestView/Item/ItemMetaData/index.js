import React from 'react'
import PropTypes from 'prop-types'
import MetaDataField from './MetaDataField'
import './style.css'

const ItemMetaData = ({ currentManifest }) => {
  const { label, metadata } = currentManifest.data
  return (
    <React.Fragment>
      <h1>{label}</h1>
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
    </React.Fragment>
  )
}

ItemMetaData.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}

export default ItemMetaData

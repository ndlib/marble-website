import React from 'react'
import PropTypes from 'prop-types'
import MetaDataField from 'Components/Shared/MetaDataField'

const CardMetaData = ({ metadata }) => {
  if (metadata) {
    return (
      <dl className='details'>
        {
          metadata.map((md, index) => {
            return <MetaDataField metadata={md} key={index} />
          })
        }
      </dl>
    )
  }
  return null
}

CardMetaData.propTypes = {
  metadata: PropTypes.array,
}

export default CardMetaData

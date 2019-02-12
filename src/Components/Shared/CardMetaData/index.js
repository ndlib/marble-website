import React from 'react'
import PropTypes from 'prop-types'
import MetaDataField from 'Components/Shared/MetaDataField'

const CardMetaData = ({ metadata }) => {
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

CardMetaData.propTypes = {
  metadata: PropTypes.array.isRequired,
}

export default CardMetaData

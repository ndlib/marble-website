import React from 'react'
import { PropTypes } from 'prop-types'
const DisplayMetadata = ({ metadata }) => {
  if (metadata) {
    metadata.map((meta) => {
      console.log(meta)
      return (
        <div className='displayMeta'> {meta.label} : {meta.value} </div>
      )
    })
  }
  return null
}

export default DisplayMetadata

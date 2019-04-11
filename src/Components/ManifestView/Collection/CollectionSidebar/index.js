import React from 'react'
import imgIIIF from './iiif.png'
import DisplayMetadata from '../DisplayMetadata'

const CollectionSidebar = (data) => {
  return (
    <React.Fragment>
      <p>{data.description}</p>
      <DisplayMetadata metadata={data.metadata} />
      <a href={data['@id']}>
        <img src={imgIIIF} alt='iiif' />
      </a>
    </React.Fragment>
  )
}

export default CollectionSidebar

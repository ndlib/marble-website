import React from 'react'
import DisplayMetadata from '../DisplayMetadata'
import ManifestLink from '../../ManifestLink'

const CollectionSidebar = (data) => {
  return (
    <React.Fragment>
      {data.description}
      <DisplayMetadata metadata={data.metadata} />
      <ManifestLink manifestUrl={data['@id']} />
    </React.Fragment>
  )
}

export default CollectionSidebar

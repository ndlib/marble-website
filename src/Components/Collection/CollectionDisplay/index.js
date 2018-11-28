import React from 'react'
import PropTypes from 'prop-types'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import CardList from 'Components/Shared/CardList'
import CollectionImage from './CollectionImage'

const CollectionDisplay = ({ currentManifest, start, perPage }) => {
  let items = defineItems(currentManifest.data)
  return (
    <React.Fragment>
      { /* add search component */ }
      <CollectionImage
        image={currentManifest.data.image}
        altText={currentManifest.data.label}
      />
      <ContentLeftSidebar
        sidebarTitle={currentManifest.data.label}
        sidebarText={currentManifest.data.description}
      >
        { /* add pagination component */ }
        <CardList
          items={items}
          start={start}
          perPage={perPage}
        />
      </ContentLeftSidebar>
    </React.Fragment>
  )
}

CollectionDisplay.propTypes = {
  currentManifest: PropTypes.object.isRequired,
  start: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
}

export const defineItems = (data) => {
  if (data.viewingHint === 'multi-part') {
    return data.collections
  }
  return data.manifests
}

export default CollectionDisplay

import React from 'react'
import PropTypes from 'prop-types'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import CardList from 'Components/Shared/CardList'
import CollectionImage from './CollectionImage'

const Collection = ({ currentManifest }) => {
  const items = defineItems(currentManifest.data)
  return (
    <React.Fragment>
      <CollectionImage
        image={currentManifest.data.image}
        altText={currentManifest.data.label}
      />
      <ContentLeftSidebar
        sidebarTitle={currentManifest.data.label}
        sidebarContent={currentManifest.data.description}
      >
        <CardList
          items={items}
          start={0}
          perPage={items.length}
        />
      </ContentLeftSidebar>
    </React.Fragment>
  )
}

Collection.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}

export const defineItems = (data) => {
  if (data.viewingHint === 'multi-part') {
    return data.collections
  }
  return data.manifests
}

export default Collection

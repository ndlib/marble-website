import React from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import CardList from 'Components/Shared/CardList'
import CollectionImage from './CollectionImage'

export const CollectionDisplay = ({ currentManifest, match }) => {
  let start = 0
  if (match && match.params && match.params.start) {
    start = parseInt(match.params.start, 10)
  }
  const perPage = 12 // TEMP VARIABLE USE STORE SETTINGS
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      start: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export const defineItems = (data) => {
  if (data.viewingHint === 'multi-part') {
    return data.collections
  }
  return data.manifests
}

export default withRouter(CollectionDisplay)

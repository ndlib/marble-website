import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import CardList from 'Components/Shared/CardList'
import CollectionImage from './CollectionImage'
import DisplayViewClass from 'Components/Shared/DisplayViewClass'
import DisplayViewToggle from 'Components/Shared/DisplayViewToggle'

export const Collection = ({ currentManifest, searchReducer }) => {
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
        <DisplayViewClass reducer={searchReducer}>
          <DisplayViewToggle reducer={searchReducer} />
          <br />
          <CardList items={items} />
        </DisplayViewClass>
      </ContentLeftSidebar>
    </React.Fragment>
  )
}

Collection.propTypes = {
  currentManifest: PropTypes.object.isRequired,
  searchReducer: PropTypes.object,
}

export const defineItems = (data) => {
  if (data.viewingHint === 'multi-part') {
    return data.collections
  }
  return data.manifests
}

const mapStateToProps = (state) => {
  return { ...state }
}
export default connect(mapStateToProps)(Collection)

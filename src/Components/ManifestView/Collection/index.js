import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import ManifestCardList from 'Components/Shared/ManifestCardList'
import CollectionImage from './CollectionImage'
import DisplayViewClass from 'Components/Shared/DisplayViewClass'
import DisplayViewToggle from 'Components/Shared/DisplayViewToggle'

export const Collection = ({ currentManifest, manifestReducer }) => {
  const items = defineItems(currentManifest.data)
  return (
    <React.Fragment>
      <CollectionImage
        image={currentManifest.data.thumbnail}
        altText={currentManifest.data.label}
      />
      <ContentLeftSidebar
        sidebarTitle={currentManifest.data.label}
        sidebarContent={currentManifest.data.description}
      >
        <DisplayViewClass reducer={manifestReducer}>
          <DisplayViewToggle reducer={manifestReducer} />
          <br className='clearfix' />
          <ManifestCardList items={items} />
        </DisplayViewClass>
      </ContentLeftSidebar>
    </React.Fragment>
  )
}

Collection.propTypes = {
  currentManifest: PropTypes.object.isRequired,
  manifestReducer: PropTypes.object,
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

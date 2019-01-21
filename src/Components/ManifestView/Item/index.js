import React from 'react'
import PropTypes from 'prop-types'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import ItemSide from './ItemSide'
import ItemMetaData from './ItemMetaData'
import RelatedItems from './RelatedItems'

export const Item = ({ currentManifest }) => {
  return (
    <React.Fragment>
      <ContentLeftSidebar
        sidebarContent={
          <ItemSide currentManifest={currentManifest} />
        }
      >
        <ItemMetaData currentManifest={currentManifest} />
        <RelatedItems currentManifest={currentManifest} />
      </ContentLeftSidebar>
    </React.Fragment>
  )
}

Item.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}

export default Item

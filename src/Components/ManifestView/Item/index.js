import React from 'react'
import PropTypes from 'prop-types'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import ItemSide from './ItemSide'
import ItemTitle from './ItemTitle'
import ItemActionButtons from './ItemActionButtons'
import ItemMetaData from './ItemMetaData'
import ItemDownloads from './ItemDownloads'

export const Item = ({ currentManifest }) => {
  return (
    <React.Fragment>
      <ContentLeftSidebar
        className='evenSplit'
        sidebarContent={
          <ItemSide currentManifest={currentManifest} />
        }
      >
        <ItemTitle currentManifest={currentManifest} />
        <ItemActionButtons />
        <ItemMetaData currentManifest={currentManifest} />
        <ItemDownloads currentManifest={currentManifest} />
      </ContentLeftSidebar>
    </React.Fragment>
  )
}

Item.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}

export default Item

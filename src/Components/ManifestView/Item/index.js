import React from 'react'
import PropTypes from 'prop-types'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import ItemSide from './ItemSide'
import ItemTitle from './ItemTitle'
import ItemActionButtons from './ItemActionButtons'
import ItemMetaData from './ItemMetaData'
// import ItemDownloads from './ItemDownloads'
import Breadcrumb from '../Breadcrumb'

export const Item = ({ currentManifest }) => {
  return (
    <React.Fragment>
      <Breadcrumb />
      <ItemTitle currentManifest={currentManifest} />

      <ContentLeftSidebar
        className='evenSplit'
        sidebarContent={
          <React.Fragment>
            <ItemSide currentManifest={currentManifest} />
            <ItemActionButtons manifest={currentManifest} />

          </React.Fragment>
        }
      >
        <ItemMetaData currentManifest={currentManifest} />
      </ContentLeftSidebar>
    </React.Fragment>
  )
}

Item.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}

export default Item

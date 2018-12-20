import React from 'react'
import PropTypes from 'prop-types'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import ItemSide from './ItemSide'
import ItemMetaData from './ItemMetaData'
import RelatedItems from './RelatedItems'

export const ItemDisplay = ({ itemId }) => {
  return (
    <React.Fragment>
      { /* add search component */ }
      <ContentLeftSidebar
        sidebarContent={
          <ItemSide itemId={itemId} />
        }
      >
        <ItemMetaData itemId={itemId} />
        <RelatedItems itemId={itemId} />
      </ContentLeftSidebar>
    </React.Fragment>
  )
}

ItemDisplay.propTypes = {
  itemId: PropTypes.string.isRequired,
}

export default ItemDisplay

import React from 'react'
import PropTypes from 'prop-types'
import ItemActionButtons from './ItemActionButtons'
import ItemMainImage from './ItemMainImage'
import ItemAlternateViews from './ItemAlternateViews'

const ItemSide = ({ itemId }) => {
  return (
    <React.Fragment>
      <ItemMainImage itemId={itemId} />
      <ItemActionButtons itemId={itemId} />
      <ItemAlternateViews itemId={itemId} />
    </React.Fragment>
  )
}

ItemSide.propTypes = {
  itemId: PropTypes.string.isRequired,
}
export default ItemSide

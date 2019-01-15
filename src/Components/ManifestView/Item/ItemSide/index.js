import React from 'react'
import PropTypes from 'prop-types'
import ItemActionButtons from '../ItemActionButtons'
import ItemMainImage from './ItemMainImage'
import ItemAlternateViews from './ItemAlternateViews'

const ItemSide = ({ currentManifest }) => {
  return (
    <React.Fragment>
      <ItemMainImage currentManifest={currentManifest} />
      <ItemActionButtons currentManifest={currentManifest} />
      <ItemAlternateViews currentManifest={currentManifest} />
    </React.Fragment>
  )
}

ItemSide.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}
export default ItemSide

import React from 'react'
import PropTypes from 'prop-types'
import ItemMainImage from './ItemMainImage'
import ItemAlternateViews from './ItemAlternateViews'

const ItemSide = ({ currentManifest }) => {
  return (
    <section>
      <ItemMainImage currentManifest={currentManifest} />
      <ItemAlternateViews currentManifest={currentManifest} />
    </section>
  )
}

ItemSide.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}
export default ItemSide

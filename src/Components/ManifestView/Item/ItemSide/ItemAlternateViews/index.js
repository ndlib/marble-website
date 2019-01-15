import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import AlternateImage from './AlternateImage'

// export max number of images to display so we don't have to update unit
// tests if/when this number changes
export const MAX_IMAGES = 3

const ItemAlternateViews = ({ currentManifest }) => {
  const canvases = typy(currentManifest, 'data.sequences[0].canvases').safeObject

  if (Array.isArray(canvases)) {
    // truncate at 3 alternate images
    canvases.length = Math.min(MAX_IMAGES, canvases.length)
    return (
      <span className='alternateImages'>
        {
          canvases.map((canvas, index) => {
            const image = typy(canvas, "thumbnail['@id']").safeString
            return <AlternateImage key={image} image={image} index={index} />
          })
        }
      </span>
    )
  }
  return null
}

ItemAlternateViews.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}

export default ItemAlternateViews

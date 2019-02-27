import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import AlternateImage from './AlternateImage'

// export max number of images to display so we don't have to update unit
// tests if/when this number changes
export const MAX_IMAGES = 4

const ItemAlternateViews = ({ currentManifest }) => {
  const canvases = typy(currentManifest, 'data.sequences[0].canvases').safeObject
  if (Array.isArray(canvases)) {
    // truncate at 3 alternate images
    const originalLength = canvases.length
    canvases.length = Math.min(MAX_IMAGES, canvases.length)
    return (
      <span className='alternateImages'>
        {
          canvases.map((canvas, index) => {
            let image
            if (typy(canvas, `thumbnail`).isObject) {
              image = typy(canvas, `thumbnail`).safeObject
              console.log(image)
            } else if (typy(canvases, `[${index}].images[0].service['@id']`).isObject) {
              image = typy(canvases, `[${index}].images[0].service['@id']`).safeObject
            }
            return (
              <AlternateImage
                key={index}
                image={image}
                index={index}
                max={MAX_IMAGES}
                length={originalLength}
              />
            )
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

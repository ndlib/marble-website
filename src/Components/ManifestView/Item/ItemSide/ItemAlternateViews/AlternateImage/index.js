import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import AlternateOverlay from './AlternateOverlay'
import IIIFImage from 'Components/Shared/IIIFImage'
import urlContext from 'Functions/urlContext'
import { VIEWER_CONTEXT } from 'Constants/viewingContexts'
import './style.css'

export const AlternateImage = ({ image, index, max, length, match }) => {
  if (length > 1) {
    return (
      <Link
        className='alternateImage'
        to={urlContext(`/${VIEWER_CONTEXT}/${typy(match, 'params.contextId').safeString}`, match, [{ label: 'cv', value: index }])}
      >
        <AlternateOverlay
          index={index}
          max={max}
          length={length}
        />
        <IIIFImage
          image={image}
          alt={`Alternate View ${index}`}
          previewBlur
        />
      </Link>
    )
  } return null
}

AlternateImage.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  index: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      contextId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default withRouter(AlternateImage)

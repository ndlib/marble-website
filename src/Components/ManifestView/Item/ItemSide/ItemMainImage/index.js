import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import ExpandIcon from './ExpandIcon'
import IIIFImage from 'Components/Shared/IIIFImage'
import urlContext from 'Functions/urlContext'
import { VIEWER_CONTEXT } from 'Constants/viewingContexts'
import './style.css'

export const ItemMainImage = ({ currentManifest, match }) => {
  const image = typy(
    currentManifest,
    'data.sequences[0].canvases[0].images[0].resource'
  ).safeObject
  return (
    <Link to={urlContext(`/${VIEWER_CONTEXT}/${typy(match, 'params.contextId').safeString}`, match)}>
      <div className='itemImage'>
        <IIIFImage
          image={image}
          alt={'title'}
          srcSetOnLoad
        />
        <ExpandIcon />
      </div>
    </Link>
  )
}

ItemMainImage.propTypes = {
  currentManifest: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      contextId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
export default withRouter(ItemMainImage)

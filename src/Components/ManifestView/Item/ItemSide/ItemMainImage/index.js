import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import ExpandIcon from './ExpandIcon'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'
import urlContext from 'Functions/urlContext'
import { VIEWER_CONTEXT } from 'Constants/viewingContexts'
import './style.css'

export const ItemMainImage = ({ currentManifest, match }) => {
  const image = typy(
    currentManifest,
    "data.sequences[0].canvases[0].images[0].resource['@id']"
  ).safeString || DEFAULT_ITEM_IMAGE
  return (
    <Link to={urlContext(`/${VIEWER_CONTEXT}/${typy(match, 'params.contextId').safeString}`, match)}>
      <div className='itemImage'>
        <img
          src={image}
          alt={'title'}
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

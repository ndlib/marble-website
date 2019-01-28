import React from 'react'
import PropTypes from 'prop-types'
import Browse from '../Browse'
import Collection from '../Collection'
import Item from '../Item'
import Viewer from '../Viewer'
import NotFound from 'Components/Shared/NotFound/'
import {
  BROWSE_CONTEXT,
  COLLECTION_CONTEXT,
  ITEM_CONTEXT,
  VIEWER_CONTEXT,
} from 'Constants/viewingContexts'

const ManifestDisplayRouter = ({ context, currentManifest }) => {
  switch (context) {
    case BROWSE_CONTEXT:
      return <Browse currentManifest={currentManifest} />
    case COLLECTION_CONTEXT:
      return <Collection currentManifest={currentManifest} />
    case ITEM_CONTEXT:
      return <Item currentManifest={currentManifest} />
    case VIEWER_CONTEXT:
      return <Viewer currentManifest={currentManifest} />
    default:
      return <NotFound />
  }
}

ManifestDisplayRouter.propTypes = {
  context: PropTypes.string.isRequired,
  currentManifest: PropTypes.object.isRequired,
}

export default ManifestDisplayRouter

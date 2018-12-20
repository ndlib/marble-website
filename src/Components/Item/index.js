import React from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { withRouter } from 'react-router'
// import {
//   getManifest,
//   STATUS_READY,
//   STATUS_ERROR,
// } from 'Store/actions/manifestActions'
import ItemDisplay from './ItemDisplay'
// import Loading from 'Components/Shared/Loading'
// import NotFound from 'Components/Shared/NotFound/'

export const Item = ({ match }) => {
  const {
    itemManifestId,
    // collectionManifestId,
  } = match.params
  // TODO: switch statement based on status
  return (
    <ItemDisplay itemId={itemManifestId} />
  )
}

Item.propTypes = {
  // manifests: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      itemManifestId: PropTypes.string.isRequired,
      // collectionManifestId: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

// const mapStateToProps = (state) => {
//   return { ...state }
// }
// export default withRouter(connect(mapStateToProps)(Item))
export default withRouter(Item)

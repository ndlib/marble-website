import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getManifest, STATUS_READY } from 'Store/actions/manifestActions'
import Loading from 'Components/Shared/Loading'

import CollectionDisplay from './CollectionDisplay'

const Collection = ({ manifests, match }) => {
  const start = parseInt(match.params.start, 10) || 0
  const perPage = 12 // TEMP VARIABLE USE STORE SETTINGS

  const currentManifest = manifests[match.params.manifestId]

  if (currentManifest && currentManifest.status === STATUS_READY) {
    return (
      <CollectionDisplay
        currentManifest={currentManifest}
        start={start}
        perPage={perPage}
      />
    )
  }
  return <Loading />
}

Collection.propTypes = {
  manifests: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      manifestId: PropTypes.string.isRequired,
      start: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => {
  return { manifests: state.manifestReducer.manifests }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  if (!stateProps.manifests[ownProps.match.params.manifestId]) {
    dispatchProps.dispatch(getManifest(ownProps.match.params.manifestId))
  }

  return { ...stateProps, ...dispatchProps, ...ownProps }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(Collection))

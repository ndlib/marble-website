import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import ManifestDisplayRouter from './ManifestDisplayRouter'

import {
  getManifest,
  STATUS_READY,
  STATUS_ERROR,
} from 'Store/actions/manifestActions'
import Loading from 'Components/Shared/Loading'
import NotFound from 'Components/Shared/NotFound/'

export const ManifestView = ({ manifests, match }) => {
  const { context, contextId } = match.params
  const currentManifest = manifests[contextId]

  if (currentManifest) {
    switch (currentManifest.status) {
      case STATUS_READY:
        return <ManifestDisplayRouter
          context={context}
          currentManifest={currentManifest}
        />
      case STATUS_ERROR:
        return <NotFound />
      default:
        return <Loading />
    }
  }
  return <Loading />
}

ManifestView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      context: PropTypes.string.isRequired,
      contextId: PropTypes.string.isRequired,
    }),
  }),
  manifests: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return { manifests: state.manifestReducer.manifests }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  if (!stateProps.manifests[ownProps.match.params.contextId]) {
    dispatchProps.dispatch(
      getManifest(
        ownProps.match.params.context,
        ownProps.match.params.contextId
      )
    )
  }

  return { ...stateProps, ...dispatchProps, ...ownProps }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(ManifestView))

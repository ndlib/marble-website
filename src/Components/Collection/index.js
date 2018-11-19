import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import SideText from 'Components/Shared/SideText'
import MainSide from 'Components/Shared/MainSide'
import { getManifest, STATUS_READY } from 'Store/actions/manifestActions'
import Loading from 'Components/Shared/Loading'
import Card from 'Components/Shared/Card'
import CollectionImage from './CollectionImage'
import { MANIFEST_BASE_URL } from 'Configurations/apis'

class Collection extends Component {
  componentDidMount () {
    this.checkManifest(
      this.props.dispatch,
      this.props.manifestReducer,
      this.props.match.params.manifestId
    )
  }
  componentDidUpdate (prevProps) {
    if (this.props.match.params !== prevProps.match.params) {
      this.checkManifest(
        this.props.dispatch,
        this.props.manifestReducer,
        this.props.match.params.manifestId
      )
    }
  }

  checkManifest
  (dispatch, manifestReducer, manifestId) {
    if (!manifestReducer.manifests[manifestId]) {
      dispatch(getManifest(manifestId))
    }
  }

  render () {
    const start = parseInt(this.props.match.params.start) || 0
    const perPage = 12 // TEMP VARIABLE USE STORE SETTINGS

    const currentManifest = this.props.manifestReducer.manifests[this.props.match.params.manifestId]

    let items
    if (currentManifest && currentManifest.status === STATUS_READY) {
      if (currentManifest.data.viewingHint === 'multi-part') {
        items = currentManifest.data.collections
      } else {
        items = currentManifest.data.manifests
      }

      return (
        <React.Fragment>
          <CollectionImage
            image={currentManifest.data.image}
            altText={currentManifest.data.label}
          />
          <SideText
            title={currentManifest.data.label}
            text={currentManifest.data.description}
          />
          <MainSide>
            {
              items.slice(start, start + perPage).map(item => {
                return (
                  <Card
                    key={item['@id']}
                    title={item.label}
                    image={null}
                    url={`/collection${item['@id'].replace(MANIFEST_BASE_URL, '/')}`}
                  />)
              })
            }
          </MainSide>
        </React.Fragment>
      )
    }
    return <Loading />
  }
}

Collection.propTypes = {
  dispatch: PropTypes.func.isRequired,
  manifestReducer: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      manifestId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
const mapStateToProps = (state) => {
  return { ...state }
}

export default withRouter(connect(mapStateToProps)(Collection))

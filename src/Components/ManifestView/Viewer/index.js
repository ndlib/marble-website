import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import queryString from 'query-string'
import { withRouter } from 'react-router'
import { UNIVERSAL_VIEWER_BASE_URL } from 'Configurations/apis'
import './style.css'

export const Viewer = ({ currentManifest, history }) => {
  const values = queryString.parse(history.location.search)

  let viewerParams = ''
  if (values.cv) {
    viewerParams = `&cv=${values.cv || 0}`
  }
  return (
    <main id='main'>
      <h1 className='accessibilityOnly'>{typy(currentManifest, 'data.label').safeString}</h1>
      <iframe
        allowFullScreen
        id='universalViewer'
        title='universal-viewer'
        sandbox='allow-same-origin allow-scripts allow-pointer-lock allow-popups'
        src={`${UNIVERSAL_VIEWER_BASE_URL}#?manifest=${typy(currentManifest, 'data[@id]').safeString}${viewerParams}`}
      />
    </main>
  )
}

Viewer.propTypes = {
  currentManifest: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(Viewer)

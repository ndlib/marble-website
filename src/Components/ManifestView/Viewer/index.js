import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import { UNIVERSAL_VIEWER_BASE_URL } from 'Configurations/apis'
import './style.css'
const Viewer = ({ currentManifest }) => {
  return (
    <iframe
      allowFullScreen
      id='universalViewer'
      title='universal-viewer'
      sandbox='allow-same-origin allow-scripts allow-pointer-lock allow-popups'
      src={`${UNIVERSAL_VIEWER_BASE_URL}#?manifest=${typy(currentManifest, 'data[@id]').safeString}`}
    />
  )
}

Viewer.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}

export default Viewer

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import urlContext from 'Functions/urlContext'
import { MANIFEST_BASE_URL } from 'Configurations/apis.js'
import { withRouter } from 'react-router'

export const CardLink = ({ url, displayClass, match, children }) => {
  if (url.includes(MANIFEST_BASE_URL)) {
    return (
      <Link
        to={urlContext(url, match)}
        className={displayClass}
      >
        { children }
      </Link>
    )
  } else {
    return (<a href={url} className={displayClass}>{ children }</a>)
  }
}

CardLink.propTypes = {
  url: PropTypes.string.isRequired,
  displayClass: PropTypes.string,
  children: PropTypes.node,
  match: PropTypes.shape({
    params: PropTypes.shape({
      context: PropTypes.string,
      contextId: PropTypes.string,
    }),
  }),
}

export default withRouter(CardLink)

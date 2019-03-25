import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import urlContext from 'Functions/urlContext'
import { withRouter } from 'react-router'
import queryString from 'query-string'

export const CardLink = ({ url, displayClass, match, location, children }) => {
  let searchQuery = null
  if (location && location.pathname === '/search') {
    const q = queryString.parse(location.search)
    searchQuery = Object.keys(q).map(key => {
      if (key !== 'ref' || key !== 'id') {
        return { label: key, value: q[key] }
      }
      return null
    })
    searchQuery.push({ label: 'ref', value: 'search' })
  }

  if (url.indexOf('http') < 0) {
    return (
      <Link
        to={urlContext(url, match, searchQuery)}
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
  location: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      context: PropTypes.string,
      contextId: PropTypes.string,
    }),
  }),
}

export default withRouter(CardLink)

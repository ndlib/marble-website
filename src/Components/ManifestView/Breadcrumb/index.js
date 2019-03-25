import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import queryString from 'query-string'
import typy from 'typy'
import {
  COLLECTION_CONTEXT,
  SEARCH_CONTEXT,
} from 'Constants/viewingContexts'
import './style.css'

export const Breadcrumb = ({ location, match, manifestReducer }) => {
  const { search } = location
  const { params } = match
  const { manifests } = manifestReducer
  const qs = queryString.parse(search)

  const crumbs = [
    { to: '/', label: 'Home' },
  ]
  if (qs.ref === SEARCH_CONTEXT) {
    delete qs.ref
    delete qs.id
    crumbs.push({ to: { pathname:'/search', search: queryString.stringify(qs) }, label: 'Search' })
  } else {
    crumbs.push({ to: '/browse', label: 'Browse' })
  }
  if (qs.ref === COLLECTION_CONTEXT) {
    const collectionTitle = typy(manifests, `[${qs.id}].data.label`).safeString
    crumbs.push({ to: `/collection/${qs.id}`, label: collectionTitle || 'Collection' })
  }

  const itemTitle = typy(manifests, `[${params.contextId}].data.label`).safeString
  return (
    <nav className='breadcrumbs'>
      {crumbs.map((crumb, index) => {
        return <Link to={crumb.to} key={index}>{crumb.label}</Link>
      })}
      {itemTitle}
    </nav>
  )
}

Breadcrumb.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  manifestReducer: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default withRouter(connect(mapStateToProps)(Breadcrumb))

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import searchUrl from 'Functions/searchUrl'

export const PaginationButton = ({ currentPage, prev, searchReducer }) => {
  let { perpage, terms, nextpage } = searchReducer
  const settings = getSettings(prev, currentPage)

  // Do not render if no nextPage on next link OR
  // Do not render if currently on 1st page and prev
  if ((!prev && nextpage) || (prev && currentPage > 1)) {
    return (
      <Link to={searchUrl(terms, perpage, settings.targetPage)}>
        <button
          className='pageLink'
        > {settings.label} </button>
      </Link>
    )
  }
  return null
}

PaginationButton.propTypes = {
  searchReducer: PropTypes.object.isRequired,
  prev: PropTypes.bool,
  currentPage: PropTypes.number.isRequired,
}

export const mapStateToProps = (state) => {
  return { ...state }
}

export const getSettings = (prev, currentPage) => {
  let label = '>'
  let targetPage = currentPage + 1
  if (prev) {
    label = '<'
    targetPage = currentPage - 1
  }
  return {
    label: label,
    targetPage: targetPage,
  }
}

export default withRouter(connect(mapStateToProps)(PaginationButton))

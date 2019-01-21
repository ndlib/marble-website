import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import searchUrl from 'Functions/searchUrl'

const PaginationButton = ({ targetPage, label, searchReducer }) => {
  let { perpage, terms, view } = searchReducer
  return (
    <Link to={searchUrl(terms, perpage, targetPage, view)}>
      <button
        className='pageLink'
      > {label} </button>
    </Link>
  )
}

PaginationButton.propTypes = {
  targetPage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  searchReducer: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}
export default withRouter(connect(mapStateToProps)(PaginationButton))

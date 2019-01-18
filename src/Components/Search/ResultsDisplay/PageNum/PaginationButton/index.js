import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const PaginationButton = ({ targetPage, label, history, searchReducer }) => {
  let { perpage, terms } = searchReducer
  return (
    <Link to={`/search?terms=${terms}&perpage=${perpage}&page=${targetPage}`}>
      <button
        className='pageLink'
      > {label} </button>
    </Link>
  )
}

PaginationButton.propTypes = {
  targetPage: PropTypes.number.isRequired,
  history: PropTypes.object,
  label: PropTypes.string.isRequired,
  searchReducer: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}
export default withRouter(connect(mapStateToProps)(PaginationButton))

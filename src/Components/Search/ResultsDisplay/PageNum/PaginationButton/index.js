import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updatePage } from 'Store/actions/searchActions'

const PaginationButton = ({ targetPage, label, dispatch, searchReducer }) => {
  let { perpage, terms } = searchReducer
  return (
    <button
      className='pageLink'
      onClick={
        () => changePage(terms, dispatch, perpage, targetPage)
      }
    > {label} </button>
  )
}

PaginationButton.propTypes = {
  targetPage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  searchReducer: PropTypes.object.isRequired,
}

const changePage = (terms, dispatch, perpage, targetPage) => {
  dispatch(updatePage(perpage, terms, targetPage))
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(PaginationButton)

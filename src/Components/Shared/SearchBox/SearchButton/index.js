import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import searchImage from 'Static/icons/svg/baseline-search-24px.svg'

export const SearchButton = ({ history, searchReducer, submitSearch }) => {
  const { rawInput, perpage, view } = searchReducer
  return (
    <button
      className='submitSearch'
      onClick={() => submitSearch(history, rawInput, perpage, view)}
    >
      <img
        className='searchIcon'
        src={searchImage}
        alt='Search'
        value='submit' />
    </button>
  )
}

SearchButton.propTypes = {
  history: PropTypes.object.isRequired,
  searchReducer: PropTypes.object.isRequired,
  submitSearch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default withRouter(connect(mapStateToProps)(SearchButton))

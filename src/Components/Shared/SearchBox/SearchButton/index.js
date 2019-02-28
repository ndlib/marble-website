import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import searchImage from 'Static/icons/svg/baseline-search-24px.svg'
import searchImageWhite from 'Static/icons/svg/baseline-search-24px-white.svg'
export const SearchButton = ({ white, history, searchReducer, submitSearch }) => {
  const { rawInput, perpage, view } = searchReducer
  return (
    <button
      className='submitSearch'
      onClick={() => submitSearch(history, rawInput, perpage, view)}
    >
      <img
        className='searchIcon'
        src={white ? searchImageWhite : searchImage}
        alt='Search'
        value='submit' />
    </button>
  )
}

SearchButton.propTypes = {
  history: PropTypes.object.isRequired,
  searchReducer: PropTypes.object.isRequired,
  submitSearch: PropTypes.func.isRequired,
  white: PropTypes.bool.isRequired,
}

SearchButton.defaultProps = {
  white: false,
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default withRouter(connect(mapStateToProps)(SearchButton))

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateInput } from 'Store/actions/searchActions'

export const SearchField = ({ submitSearch, history, searchReducer, dispatch }) => {
  const { rawInput, perpage, view } = searchReducer
  return (
    <input
      type='text'
      className='searchbar'
      placeholder='Search the Collection'
      onChange={(e) => {
        dispatch(updateInput(e.target.value))
      }}
      value={rawInput}
      onKeyDown={(e) => {
        // Submit on enter key press
        if (e.keyCode === 13) {
          submitSearch(history, rawInput, perpage, view)
        }
      }}
    />
  )
}

SearchField.propTypes = {
  submitSearch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  searchReducer: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default withRouter(connect(mapStateToProps)(SearchField))

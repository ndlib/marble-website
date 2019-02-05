import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import searchUrl from 'Functions/searchUrl'
import searchImage from './search.png'
import { updateInput } from 'Store/actions/searchActions'
import './style.css'

const SearchBox = ({
  history,
  searchReducer,
  dispatch,
}) => {
  let input
  const { rawInput, perpage, view } = searchReducer
  return (
    <div className='searchComponent' >
      <div className='searchField'>
        <button
          className='submitSearch'
          onClick={
            () => {
              pushHistory(history, rawInput, perpage, view)
            }
          }>
          <img
            className='searchIcon'
            src={searchImage}
            alt='Search'
            value='submit' />
        </button>
        <input
          type='text'
          className='searchbar'
          placeholder='Search the Collection'
          onChange={(e) => {
            dispatch(updateInput(e.target.value))
          }}
          value={rawInput}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              pushHistory(history, rawInput, perpage, view)
            }
          }}
        />
      </div>
      <div className='advancedSearch'>
        <a href='*'>Advanced Search</a>
      </div>
    </div>
  )
}

SearchBox.propTypes = {
  history: PropTypes.object.isRequired,
  searchReducer: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export const pushHistory = (history, rawInput, perpage, view) => {
  history.push(searchUrl(rawInput, perpage, 1, view))
}

const mapStateToProps = (state) => {
  return { ...state }
}
export default withRouter(connect(mapStateToProps)(SearchBox))

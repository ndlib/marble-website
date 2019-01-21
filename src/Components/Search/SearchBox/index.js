import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import searchUrl from 'Functions/searchUrl'
import searchImage from './search.png'
import './style.css'

export const SearchBox = ({ terms, history, searchReducer }) => {
  let input
  const { perpage, view } = searchReducer
  return (
    <div id='SearchComponent' >
      <div id='Search'>
        <button id='SearchSubmit' onClick={
          () => {
            pushHistory(history, input.value, perpage, view)
          }
        }><img id='SearchIMG' src={searchImage} alt='Search' value='submit' /></button>
        <input
          ref={node => (input = node)}
          type='text'
          id='Searchbar'
          placeholder={
            !terms ? 'Search the Collection' : terms}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              pushHistory(history, input.value, perpage, view)
            }
          }}
        />
      </div>
      <div id='AdvancedSearch'>
        <a href='*'>Advanced Search</a>
      </div>
    </div>
  )
}

SearchBox.propTypes = {
  terms: PropTypes.string,
  history: PropTypes.object.isRequired,
  searchReducer: PropTypes.object.isRequired,
}

export const pushHistory = (history, terms, perpage, view) => {
  console.log('view', view)
  history.push(searchUrl(terms, perpage, 1, view))
}
const mapStateToProps = (state) => {
  return { ...state }
}
export default withRouter(connect(mapStateToProps)(SearchBox))

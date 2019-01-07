import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.css'
import searchImage from './search.png'

import { updatePage } from 'Store/actions/searchActions'

export const SearchBox = ({ dispatch, Searchbar, history, perpage }) => {
  let input
  if (perpage === undefined) {
    perpage = 12
  }
  return (
    <form id='SearchComponent' onSubmit={e => {
      formSearchSubmit(e, input, perpage, dispatch)
    }} >
      <div id='Search'>
        <button id='SearchSubmit' onClick={
          () => (history.push('/search?terms=' + input.value + '&perpage=' + perpage + '&page=1'))
        }><img id='SearchIMG' src={searchImage} alt='Search' value='submit' /></button>
        <input ref={node => (input = node)} type='text' id='Searchbar' placeholder={
          !Searchbar ? 'Search the Collection' : Searchbar} />
      </div>
      <div id='AdvancedSearch'>
        <a href='*'>Advanced Search</a>
      </div>
    </form>
  )
}

const formSearchSubmit = (e, input, perpage, dispatch) => {
  e.preventDefault()
  dispatch(updatePage(perpage, input.value, 1))
}

SearchBox.propTypes = {
  dispatch: PropTypes.func,
  Searchbar: PropTypes.func,
  history: PropTypes.object,
  perpage: PropTypes.string,
}

export default withRouter(connect()(SearchBox))

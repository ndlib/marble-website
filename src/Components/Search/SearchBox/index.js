import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './style.css'
import searchImage from './search.png'

import { changePage } from 'Store/actions/searchActions'

const SearchBox = ({ dispatch, Searchbar, history, perpage }) => {
  let input
  if (perpage == undefined) {
    perpage = 10
  }
  return (
    <form id='SearchComponent' onSubmit={e => {
      formSearchSubmit(e, input, perpage, dispatch)
    }} >
      <div id='Search'>
        <button id='SearchSubmit' onClick={e => (history.push('/search?terms=' + input.value + '&perpage=' + perpage + '&page=1'))}><img id='SearchIMG' src={searchImage} alt='Search' value='submit' /></button>
        <input ref={node => (input = node)} type='text' id='Searchbar' placeholder={!Searchbar ? 'Search the Collection' : Searchbar} />
      </div>
      <div id='AdvancedSearch'>
        <a href='*'>Advanced Search</a>
      </div>
    </form>
  )
}

export default withRouter(connect()(SearchBox))

const formSearchSubmit = (e, input, perpage, dispatch) => {
  e.preventDefault()
  dispatch(changePage(perpage, input.value, 1))
}

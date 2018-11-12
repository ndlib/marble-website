import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import './style.css'
import searchImage from './search.png'

import { submitSearch } from 'Store/actions/searchActions'

const SearchBox = ({ dispatch }) => {
  let input

  return (
    <form id='SearchComponent' onSubmit={e => {
      formSearchSubmit(e, input, dispatch)
    }} >
      <div id='Search'>
        <button id='SearchSubmit' type='submit'><img id='SearchIMG' src={searchImage} alt='Search' value='submit' /></button>
        <input ref={node => (input = node)} type='text' id='Searchbar' placeholder='Search the Collection' />
      </div>

      <div id='AdvancedSearch'>
        <a href='*'>Advanced Search</a>
      </div>

    </form>
  )
}

SearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
export default connect()(SearchBox)

const formSearchSubmit = (e, input, dispatch) => {
  e.preventDefault()
  dispatch(submitSearch(input.value))
}

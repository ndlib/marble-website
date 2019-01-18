import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.css'
import searchImage from './search.png'

export const SearchBox = ({ Searchbar, history, perpage }) => {
  let input
  if (perpage === undefined) {
    perpage = 12
  }
  return (
    <div id='SearchComponent' >
      <div id='Search'>
        <button id='SearchSubmit' onClick={
          () => {
            history.push(`/search?terms=${input.value}&perpage=${perpage}&page=1`)
          }
        }><img id='SearchIMG' src={searchImage} alt='Search' value='submit' /></button>
        <input ref={node => (input = node)} type='text' id='Searchbar' placeholder={
          !Searchbar ? 'Search the Collection' : Searchbar} />
      </div>
      <div id='AdvancedSearch'>
        <a href='*'>Advanced Search</a>
      </div>
    </div>
  )
}

SearchBox.propTypes = {
  Searchbar: PropTypes.string,
  history: PropTypes.object,
  perpage: PropTypes.string,
}

export default withRouter(connect()(SearchBox))

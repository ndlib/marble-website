import React from 'react'
import { connect } from 'react-redux'

import './style.css'
import searchImage from './search.png'

const Searchbox = ({ dispatch }) => {
  let input

  return (
      <div id='Search'>
        <button id='SearchSubmit' type='submit'>
          <img id='SearchIMG' src={searchImage} alt='Search' value='submit' />
        </button>
        <input ref={node => (input = node)} type='text' id='Searchbar' placeholder='Search the Collection' />
      </div>
      <div id='AdvancedSearch'>
        <a href='*'>Advanced Search</a>
      </div>
  )
}

export default connect()(Searchbox)

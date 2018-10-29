import React from 'react'

import './style.css'
import searchImage from './search.png'

class Searchbox extends React.Component {
  render () {
    return (
      <div>
        <div id='Search'>
          <button id='SearchSubmit' type='submit'>
            <img id='SearchIMG' src={searchImage} alt='Search' value='submit' />
          </button>
          <input ref={node => (this.input = node)} type='text' id='Searchbar' placeholder='Search the Collection' />
        </div>
        <div id='AdvancedSearch'>
          <a href='*'>Advanced Search</a>
        </div>
      </div>
    )
  }
}

export default Searchbox

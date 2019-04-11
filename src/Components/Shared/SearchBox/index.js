import React from 'react'
import searchUrl from 'Functions/searchUrl'
import SearchButton from './SearchButton'
import SearchField from './SearchField'
import './style.css'
import { Link } from 'react-router-dom'
import imgHelp from './help.svg'

const SearchBox = () => {
  return (
    <section className='searchComponent' >
      <div className='searchBox'>
        <SearchField submitSearch={submitSearch} />
        <SearchButton submitSearch={submitSearch} />
      </div>
      <div className='advancedSearch'>
        <Link to='/advancedsearch'>Advanced Search</Link>
        <Link to='/help/search-tips'>
          <img
            src={imgHelp}
            alt='help'
            className='tipImg'
          />
        </Link>
      </div>
    </section>
  )
}

export const submitSearch = (history, rawInput, perpage) => {
  history.push(searchUrl(rawInput, perpage, 1))
  return history
}

export default SearchBox

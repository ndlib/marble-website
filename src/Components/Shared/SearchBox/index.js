import React from 'react'
import searchUrl from 'Functions/searchUrl'
import SearchButton from './SearchButton'
import SearchField from './SearchField'
import './style.css'

const SearchBox = () => {
  return (
    <div className='searchComponent' >
      <div className='searchBox'>
        <SearchButton submitSearch={submitSearch} />
        <SearchField submitSearch={submitSearch} />
      </div>
      <div className='advancedSearch'>
        <a href='*'>Advanced Search</a>
      </div>
    </div>
  )
}

export const submitSearch = (history, rawInput, perpage) => {
  history.push(searchUrl(rawInput, perpage, 1))
  return history
}

export default SearchBox

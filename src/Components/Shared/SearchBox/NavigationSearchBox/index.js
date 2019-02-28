import React from 'react'
import searchUrl from 'Functions/searchUrl'
import SearchButton from '../SearchButton'
import SearchField from '../SearchField'
import './style.css'
import { submitSearch } from '../'

const NavigationSearchBox = () => {
  return (
    <div className='navigationSearchBox searchBox'>
      <SearchButton submitSearch={submitSearch} white />
      <SearchField submitSearch={submitSearch} />
    </div>
  )
}

export default NavigationSearchBox

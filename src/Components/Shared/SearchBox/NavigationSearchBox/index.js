import React from 'react'
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

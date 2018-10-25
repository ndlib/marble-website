import React from 'react'
import { connect } from 'react-redux'

import './style.css'
import searchImage from './search.png'

import { submitSearch } from '../../Store/actions/searchActions'

export const SearchComponent = ({ dispatch }) => {
  let input

  return (
    <form id='SearchComponent' onSubmit={e => {
      formSearchSubmit(e, input, select, dispatch)
    }} >
      <Searchbox />
      <PerPage />
    </form>
  )
}

export default connect()(SearchComponent)

export const formSearchSubmit = (e, input, select, dispatch) => {
  e.preventDefault()
  dispatch(submitSearch(input.value, select.value))
}

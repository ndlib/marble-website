import React from 'react'
import { connect } from 'react-redux'

import Searchbox from './Searchbox'
import PerPage from './PerPage'

import { submitSearch } from '../../Store/actions/searchActions'

export const SearchComponent = ({ dispatch }) => {
  return (
    <form id='SearchComponent' onSubmit={e => {
      formSearchSubmit(e, dispatch)
    }} >
      <Searchbox />
      <PerPage />
    </form>
  )
}

export default connect()(SearchComponent)

export const formSearchSubmit = (e, dispatch) => {
  e.preventDefault()
  dispatch(submitSearch(Searchbox.input, PerPage.select))
}

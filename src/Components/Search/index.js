import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import SearchDisplay from './SearchDisplay'
import Loading from 'Components/Shared/Loading'
import NotFound from 'Components/Shared/NotFound'
import {
  submitSearch,
  STATUS_SEARCH_EMPTY,
  STATUS_SEARCH_FETCHING,
  STATUS_SEARCH_READY,
  STATUS_SEARCH_ERROR,
} from 'Store/actions/searchActions'

export const Search = ({ searchReducer }) => {
  switch (searchReducer.status) {
    case STATUS_SEARCH_EMPTY:
      return null
    case STATUS_SEARCH_READY:
      return <SearchDisplay />
    case STATUS_SEARCH_ERROR:
      return <NotFound />
    default:
      return <Loading />
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

export const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const values = queryString.parse(ownProps.location.search)
  if (shouldDispatchSearch(stateProps.searchReducer, values.terms, stateProps.searchReducer.page, values.page)) {
    dispatchProps.dispatch(
      submitSearch(values.perpage, values.terms, values.page || 1)
    )
  }
  return { ...stateProps, ...dispatchProps, ...ownProps }
}

export const shouldDispatchSearch = (searchReducer, terms, page, targetPage) => {
  // Not currently fetching
  // Has some terms
  // Current page of results is changing or terms are changing
  return (
    searchReducer.status !== STATUS_SEARCH_FETCHING &&
    terms &&
    (
      parseInt(page, 10) !== parseInt(targetPage, 10) ||
      searchReducer.terms !== terms
    )
  )
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Search))

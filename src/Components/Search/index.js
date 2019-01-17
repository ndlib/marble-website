import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import queryString from 'query-string'
import PropTypes from 'prop-types'

import SearchBox from './SearchBox'
import Results from './Results'
import PerPage from './PerPage'
import PageNum from './PageNum'
import ResultsView from './ResultsView'
import { updatePage } from 'Store/actions/searchActions'
import ErrorBoundary from 'Components/Shared/ErrorBoundary'

const Search = (props) => {
  let values = queryString.parse(props.location.search)
  return (
    <React.Fragment>
      <SearchBox Searchbar={values.terms} />
      <ResultsView view={values.view || 'list'} />
      <PerPage perpage={parseInt(values.perpage, 10) || 12} />
      <PageNum page={parseInt(values.page, 10) || 1} />
      <ErrorBoundary>
        <Results />
      </ErrorBoundary>
      <PageNum page={parseInt(values.page, 10) || 1} />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    perpage: state.searchReducer.perpage,
    page: state.searchReducer.page,
    terms: state.searchReducer.terms,
  }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  if (ownProps.location.search) {
    let values = queryString.parse(ownProps.location.search)
    let terms = stateProps.terms || values.terms
    let page = stateProps.page || values.page
    let perpage = stateProps.perpage || values.perpage

    dispatchProps.dispatch(updatePage(perpage, terms, page))
  }
  return { ...stateProps, ...dispatchProps, ...ownProps }
}

Search.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Search))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import queryString from 'query-string'
import PropTypes from 'prop-types'

import SearchBox from './SearchBox'
import Results from './Results'
import PerPage from './PerPage'
import PageNum from './PageNum'
import { updatePage } from 'Store/actions/searchActions'
import ErrorBoundary from 'Components/Shared/ErrorBoundary'

class Search extends Component {
  render () {
    let values = queryString.parse(this.props.location.search)
    return (
      <React.Fragment>
        <SearchBox Searchbar={values.terms} />
        <PerPage perpage={values.perpage} />
        <PageNum page={values.page} />
        <ErrorBoundary>
          <Results />
        </ErrorBoundary>
      </React.Fragment>
    )
  }
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

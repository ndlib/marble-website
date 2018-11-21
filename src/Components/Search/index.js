import React, { Component } from 'react'

import SearchBox from './SearchBox'
import Results from './Results'
import PerPage from './PerPage'
import PageNum from './PageNum'
import { submitSearch, changePage } from 'Store/actions/searchActions'
import ErrorBoundary from 'Components/Shared/ErrorBoundary'
import queryString from 'query-string'

class Search extends Component {
  render () {
    const values = queryString.parse(this.props.location.search)
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
export default Search

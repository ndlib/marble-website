import React from 'react'
import SearchBox from './SearchBox'
import Results from './Results'
import ErrorBoundary from 'Components/ErrorBoundary'
const Search = (props) => {
  return (
    <React.Fragment>
      <SearchBox />
      <ErrorBoundary>
        <Results />
      </ErrorBoundary>
    </React.Fragment>
  )
}
export default Search

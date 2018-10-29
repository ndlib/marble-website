import React from 'react'
import SearchBox from './SearchBox'
import Results from './Results'
import ErrorBoundary from 'Components/Shared/ErrorBoundary'
const Search = () => {
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

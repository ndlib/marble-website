import React from 'react'
import Results from './Results'
import PerPage from './PerPage'
import PageNum from './PageNum'
import ResultsView from './ResultsView'

const Search = () => {
  if (window.location.search) {
    return (
      <React.Fragment>
        <ResultsView />
        <PerPage />
        <PageNum />
        <Results />
        <PageNum />
      </React.Fragment>
    )
  }
  return null
}

export default Search

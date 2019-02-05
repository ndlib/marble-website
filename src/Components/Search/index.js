import React from 'react'
import Results from './Results'
import PerPage from './PerPage'
import PageNum from './PageNum'
import ResultsView from './ResultsView'
import Facets from './Facets'

const Search = () => {
  if (window.location.search) {
    return (
      <React.Fragment>
        <Facets />
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

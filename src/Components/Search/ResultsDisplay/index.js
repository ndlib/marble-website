import React from 'react'
import queryString from 'query-string'
import Results from './Results'
import PerPage from './PerPage'
import PageNum from './PageNum'
import ResultsView from './ResultsView'

const ResultsDisplay = () => {
  if (window.location.search) {
    const values = queryString.parse(window.location.search)

    return (
      <React.Fragment>
        <ResultsView view={values.view || 'list'} />
        <PerPage />
        <PageNum />
        <Results />
        <PageNum />
      </React.Fragment>
    )
  }
  return null
}

export default ResultsDisplay

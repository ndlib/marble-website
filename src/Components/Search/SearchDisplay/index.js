import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Results from './Results'
import PerPage from './PerPage'
import PageNum from './PageNum'
import ResultsView from './ResultsView'
import Facets from './Facets'

export const SearchDisplay = ({ location }) => {
  if (location.search) {
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

SearchDisplay.propTypes = {
  location: PropTypes.object.isRequired,
}
export default withRouter(SearchDisplay)

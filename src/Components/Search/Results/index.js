import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorBoundary from 'Components/Shared/ErrorBoundary'
import Result from './Result'

import './style.css'

export const Results = ({ searchResults, page, perpage }) => {
  return (
    mapValidResults(searchResults, (doc, index) =>
      <ErrorBoundary key={index}>
        <Result
          thumbnailAvailable={thumbnailAvailable}
          doc={doc}
          page={page}
          perpage={perpage}
          index={index}
        />
      </ErrorBoundary>)
  )
}

// return valid thumbnail
const thumbnailAvailable = (links) => {
  return links.linkURL.includes('JPG&client=primo')
}

export const mapStateToProps = (state) => {
  return {
    perpage: state.searchReducer.perpage,
    page: state.searchReducer.page,
    searchResults: (state.searchReducer.results && state.searchReducer.results.docs) ? state.searchReducer.results.docs
      : [] }
}

// validates if each record can be displayed.
export const validateDoc = (doc, index, rowDisplayFunction) => {
  if (!doc) {
    return {}
  }
  return rowDisplayFunction(doc, index)
}

// validates if the search result itself can be mapped.
export const mapValidResults = (searchResults, rowDisplayFunction) => {
  if (!searchResults && !searchResults.map) {
    return {}
  }
  return searchResults.map((doc, index) => {
    return validateDoc(doc, index, rowDisplayFunction)
  })
}

Results.propTypes = {
  searchResults: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Results)

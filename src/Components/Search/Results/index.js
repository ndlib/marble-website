import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ErrorBoundary from 'Components/Shared/ErrorBoundary'

import './style.css'

export const Results = ({ searchResults }) => {
  return (
    mapValidResults(searchResults, (doc, index) =>
      <ErrorBoundary>
        <div className='container' key={doc['@id']}>
          <div id='entry'>
            <span>{index + 1}</span>
            <div id='title'>{doc.title}</div>
            <div className='label'>Creator:<span id='author'>{doc.creator}</span></div>
            <div className='label'>Format:<span id='type'>{doc.type}</span></div>
            <div id='description'>{doc.description}</div>
          </div>
        </div>
      </ErrorBoundary>)
  )
}

const mapStateToProps = (state) => {
  return { searchResults: (state.searchReducer.results && state.searchReducer.results.docs)
    ? state.searchReducer.results.docs : [] }
}

// validates if each record can be displayed.
const validateDoc = (doc, index, rowDisplayFunction) => {
  if (!doc) {
    return {}
  }
  return rowDisplayFunction(doc, index)
}

// validates if the search result itself can be mapped.
const mapValidResults = (searchResults, rowDisplayFunction) => {
  if (!searchResults && !searchResults.map) {
    return {}
  }
  console.log(searchResults)
  return searchResults.map((doc, index) => {
    return validateDoc(doc, index, rowDisplayFunction)
  })
}

Results.propTypes = {
  searchResults: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Results)

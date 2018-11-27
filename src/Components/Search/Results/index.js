import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ErrorBoundary from 'Components/Shared/ErrorBoundary'

import './style.css'

export const Results = ({ searchResults, page, perpage }) => {
  return (
    mapValidResults(searchResults, (doc, index) =>
      <ErrorBoundary key={index}>
        <div className='container' key={doc.id}>
          <div id='entry'>
            <span>{(perpage * (page - 1)) + index + 1 }</span>
            <span id='title'>{doc.title}</span>
            <div className='label'>Owner:<span id='owner'>Special Collections</span></div>
            <div className='label'>Creator:<span id='author'>{doc.creator}</span></div>
            <div className='label'>Date:<span id='date'>{doc.date}</span></div>
            <div className='label'>Format:<span id='type'>{doc['@TYPE']}</span></div>
            <div className='label'>Collection:<span id='owner'>{doc.sourceId}</span></div>
            <div id='description'>{doc.description}</div>
          </div>
        </div>
      </ErrorBoundary>)
  )
}

const mapStateToProps = (state) => {
  return { perpage: state.searchReducer.perpage,
    page: state.searchReducer.page,
    searchResults: (state.searchReducer.results && state.searchReducer.results.docs)
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
  return searchResults.map((doc, index) => {
    return validateDoc(doc, index, rowDisplayFunction)
  })
}

Results.propTypes = {
  searchResults: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Results)

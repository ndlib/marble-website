import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ErrorBoundary from 'Components/Shared/ErrorBoundary'

import './style.css'

export const Results = ({ searchResults }) => {
  return (
    mapValidResults(searchResults, (doc, index) =>
      <ErrorBoundary>
        <div className='container' key={doc.id}>
          <div id='entry'>
<<<<<<< HEAD:src/Components/Search/Results/index.js
            <span>{index + 1}</span>
=======
            <span> { index + 1 } </span>
>>>>>>> UI showing first page of results in place:src/Components/results/index.js
            <div id='title'>{doc.title}</div>
            <div className='label'>Owner:<span id='owner'>Special Collections</span></div>
            <div className='label'>Creator:<span id='author'>{doc.creator}</span></div>
            <div className='label'>Date:<span id='date'>{doc.date}</span></div>
            <div className='label'>Format:<span id='type'>{doc['@TYPE']}</span></div>
            <div className='label'>Collection:<span id='owner'>{doc.collection}</span></div>
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

<<<<<<< HEAD:src/Components/Search/Results/index.js
Results.propTypes = {
=======
ResultsComponent.propTypes = {
>>>>>>> UI showing first page of results in place:src/Components/results/index.js
  searchResults: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Results)

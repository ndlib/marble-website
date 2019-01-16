import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ErrorBoundary from 'Components/Shared/ErrorBoundary'

import './style.css'
import bookIMG from './book.svg'
import fileIMG from './file.svg'

export const Results = ({ searchResults, page, perpage }) => {
  return (
    mapValidResults(searchResults, (doc, index) =>
      <ErrorBoundary key={index}>
        <div className='container' key={doc.id}>
          <div key={doc.id} id='entry'>
            { doc.delivery.link.find(thumbnailAvailable)
              ? <span id='thumbnail'><img src={doc.delivery.link.find(thumbnailAvailable).linkURL} alt='thumbnail' /></span>
              : <span id='thumbnail'><img src={doc['@TYPE'] === 'book' ? bookIMG : fileIMG} alt='thumbail' /></span>
            }
            <span id='resultnum'>{ (perpage * (page - 1)) + index + 1 } <span id='title'>{doc.title}</span></span>
            <span id='details'>
              <div><span className='label'>Owner:</span><span id='owner'>Special Collections</span></div>
              <div><span className='label'>Creator:</span><span id='author'>{doc.creator}</span></div>
              <div><span className='label'>Date:</span><span id='date'>{doc.date}</span></div>
              <div><span className='label'>Format:</span><span id='type'>{doc['@TYPE']}</span></div>
              { doc.delivery.holding[0]
                ? <div><span className='label'>Collection:</span><span id='location'>{doc.delivery.holding[0].subLocation}</span></div>
                : null }
            </span>
            <div id='description'>{doc.description}</div>
          </div>
        </div> {console.log(doc)}
      </ErrorBoundary>)
  )
}

// return valid thumbnail
const thumbnailAvailable = (links) => {
  return links.linkURL.includes('JPG&client=primo')
}

export const mapStateToProps = (state) => {
  return { perpage: state.searchReducer.perpage,
    page: state.searchReducer.page,
    searchResults: (state.searchReducer.results && state.searchReducer.results.docs)
      ? state.searchReducer.results.docs : [] }
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

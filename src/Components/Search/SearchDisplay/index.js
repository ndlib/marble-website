import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Results from './Results'
import PerPage from './PerPage'
import PageNum from './PageNum'
import Facets from './Facets'
import SearchBox from 'Components/Shared/SearchBox'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import DisplayViewClass from 'Components/Shared/DisplayViewClass'
import DisplayViewToggle from 'Components/Shared/DisplayViewToggle'

export const SearchDisplay = ({ location, searchReducer }) => {
  if (location.search) {
    return (
      <React.Fragment>
        <h1 className='staticTitle'>Search Results</h1>
        <SearchBox />
        <ContentLeftSidebar
          sidebarContent={<Facets />}
        >
          <DisplayViewToggle reducer={searchReducer} />
          <PerPage />
          <PageNum />
          <DisplayViewClass reducer={searchReducer}>
            <Results />
          </DisplayViewClass>
          <PageNum />
        </ContentLeftSidebar>
      </React.Fragment>
    )
  }
  return null
}

SearchDisplay.propTypes = {
  location: PropTypes.object.isRequired,
  searchReducer: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default withRouter(connect(mapStateToProps)(SearchDisplay))

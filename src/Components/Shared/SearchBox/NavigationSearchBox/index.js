import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import SearchButton from '../SearchButton'
import SearchField from '../SearchField'
import './style.css'
import { submitSearch } from '../'

export const NavigationSearchBox = ({ location }) => {
  if (location.pathname === '/' || location.pathname === '/search') {
    return null
  }
  return (
    <div className='navigationSearchBox searchBox'>
      <SearchButton submitSearch={submitSearch} white />
      <SearchField submitSearch={submitSearch} />
    </div>
  )
}

NavigationSearchBox.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default withRouter(NavigationSearchBox)

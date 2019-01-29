import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import FilterTab from './FilterTab'
import './style.css'

export const FilterTabBar = ({ match }) => {
  const tabs = [
    { label: 'All', target: '/browse' },
    { label: 'Time', target: '/browse/time' },
    { label: 'Place', target: '/browse/place' },
    { label: 'Theme', target: '/browse/theme' },
  ]
  return (
    <nav className='filterTabs'>
      {
        tabs.map((tab, index) => {
          return (
            <FilterTab
              key={index}
              label={tab.label}
              active={tab.target === match.url}
              target={tab.target}
            />
          )
        })
      }
    </nav>
  )
}

FilterTabBar.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
}
export default withRouter(FilterTabBar)

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import FilterTab from './FilterTab'
import './style.css'

export const FilterTabBar = ({ match }) => {
  const tabs = [
    { label: 'All', target: '/browse' },
    { label: 'Time', target: '/browse/timeperiods' },
    { label: 'Place', target: '/browse/places' },
    { label: 'Theme', target: '/browse/themes' },
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

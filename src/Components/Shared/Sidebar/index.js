import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

import { SIDEBAR_WIDTH } from 'Configurations/styles'
import './style.css'

const Sidebar = ({ items, title }) => {
  return (
    <nav
      className='sideBar'
      style={{ width: SIDEBAR_WIDTH || '240px' }}
    >
      { title ? <h2>{title}</h2> : null }
      {
        items.map(item => {
          return (
            <Link
              to={item.link}
              key={item.link}
            >{item.title}</Link>
          )
        })
      }
    </nav>
  )
}
Sidebar.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
}
export default Sidebar

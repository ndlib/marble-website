import React from 'react'
import { PropTypes } from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import './style.css'

const Sidebar = ({ items, title }) => {
  return (
    <nav className='sideBar'>
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

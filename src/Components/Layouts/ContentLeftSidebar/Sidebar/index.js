import React from 'react'
import { PropTypes } from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import './style.css'

const Sidebar = ({ title, items, text }) => {
  return (
    <div className='sideBar'>
      { title ? <h2>{title}</h2> : null }
      { text ? <div className='sideTextContent'>{ text }</div> : null}
      {
        items ? items.map(item => {
          return (
            <Link
              to={item.link}
              key={item.link}
            >{item.title}</Link>
          )
        }) : null
      }
    </div>
  )
}
Sidebar.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  text: PropTypes.string,
}
export default Sidebar

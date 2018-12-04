import React from 'react'
import { PropTypes } from 'prop-types'
import './style.css'

const Sidebar = ({ title, children }) => {
  return (
    <div className='sideBar'>
      { title ? <h2>{title}</h2> : null }
      {children}
    </div>
  )
}
Sidebar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}
export default Sidebar

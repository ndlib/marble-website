import React from 'react'
import { PropTypes } from 'prop-types'
import './style.css'

const SideText = ({ title, text }) => {
  return (
    <div className='sideText'>
      { title ? <h2>{title}</h2> : null }
      { text ? <div className='sideTextContent'>{ text }</div> : null}
    </div>
  )
}
SideText.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
}
export default SideText

import React from 'react'
import { PropTypes } from 'prop-types'
import './style.css'
import { SIDEBAR_WIDTH } from '../../../Configurations/styles'
const MainSide = ({ children }) => {
  return (
    <div
      className='mainSide'
      style={{ width: `calc(100% - ${SIDEBAR_WIDTH || '240px'})` }}
    >{children}</div>
  )
}

MainSide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
}

export default MainSide

import React from 'react'
import { PropTypes } from 'prop-types'
const MainSide = ({ children }) => {
  return (
    <div className='mainSide'>{children}</div>
  )
}

MainSide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
}

export default MainSide

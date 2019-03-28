import React from 'react'
import { PropTypes } from 'prop-types'
const MainSide = ({ children }) => {
  return (
    <main id='main' className='mainSide'>
      <article>{children}</article>
    </main>
  )
}

MainSide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
}

export default MainSide

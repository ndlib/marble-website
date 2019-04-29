import React from 'react'
import expandIcon from './expandIcon.svg'

const ExpandIcon = () => {
  return (
    <span className='expandWrapper'>
      <img
        src={expandIcon}
        alt='Open in Universal Viewer'
        className='expandIcon'
      />
    </span>
  )
}

export default ExpandIcon

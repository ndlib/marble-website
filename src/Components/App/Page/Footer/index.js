import React from 'react'
import ReactMarkdown from 'react-markdown'

import footerText from 'Configurations/Footer/footerText.md'

import './style.css'
const Footer = () => {
  return (
    <div className='Footer'>
      <div className='footerInner'>
        <div className='footerText'>
          <ReactMarkdown source={footerText} />
        </div>
      </div>
    </div>
  )
}

export default Footer

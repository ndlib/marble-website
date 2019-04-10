import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

import footerText from 'Configurations/Footer/footerText.md'
import { links } from 'Configurations/Footer/links'

import './style.css'
const Footer = () => {
  return (
    <footer>
      <div className='footerInner'>
        <div className='footerText'>
          <ReactMarkdown source={footerText} />
        </div>
        <div className='footerCenter' />
        <div className='footerLinks'>
          <nav>
            { links.map(l => {
              return <Link to={l.link} key={l.title}>{l.title}</Link>
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer

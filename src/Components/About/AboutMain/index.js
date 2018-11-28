import React from 'react'
import ReactMarkdown from 'react-markdown'
import introduction from 'Configurations/About/Text/introduction.md'
import partner1 from 'Configurations/About/Text/partner1.md'
import partner2 from 'Configurations/About/Text/partner2.md'
import partner3 from 'Configurations/About/Text/partner3.md'
import './style.css'
const AboutMain = () => {
  return (
    <React.Fragment>
      <div id='introduction' />
      <h2>Introduction</h2>
      <ReactMarkdown source={introduction} />
      <div id='partners' />
      <h2>Project Partners</h2>
      <div className='partners'>

        <div className='partner1'>
          <ReactMarkdown source={partner1} />
        </div>
        <div className='partner2'>
          <ReactMarkdown source={partner2} />
        </div>
        <div className='partner3'>
          <ReactMarkdown source={partner3} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default AboutMain

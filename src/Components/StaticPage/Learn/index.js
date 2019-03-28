import React from 'react'
import ReactMarkdown from 'react-markdown'
import learn from 'Configurations/Learn/Text/learn.md'
import './style.css'
const Learn = () => {
  return (
    <React.Fragment>
      <div id='learn' />
      <h1 className='staticTitle'>Learn</h1>
      <article>
        <ReactMarkdown source={learn} />
      </article>
    </React.Fragment>
  )
}

export default Learn

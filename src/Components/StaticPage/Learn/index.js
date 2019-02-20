import React from 'react'
import ReactMarkdown from 'react-markdown'
import learn from 'Configurations/Learn/Text/learn.md'
import './style.css'
const Learn = () => {
  return (
    <React.Fragment>
      <div id='learn' />
      <h2>Learn</h2>
      <ReactMarkdown source={learn} />
    </React.Fragment>
  )
}

export default Learn

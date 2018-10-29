import React from 'react'
import { withRouter } from 'react-router'

const Help = (props) => {
  const { topic } = props.match.params
  if (!topic) {
    return (<div>Default Help Page</div>)
  }
  return (
    <div>Help page for {topic}</div>
  )
}

export default withRouter(Help)

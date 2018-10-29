import React from 'react'
import { PropTypes } from 'prop-types'
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

Help.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.object }
  ),
}
export default withRouter(Help)

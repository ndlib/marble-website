import React from 'react'
import { PropTypes } from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { withRouter } from 'react-router'
import { topics } from 'Configurations/Help'

const Help = ({ history }) => {
  // Get the topic slug from the url. If there there is no slug, show first topic in list.
  let topic
  if (
    history.location.pathname !== '/' &&
    history.location.pathname !== '/help'
  ) {
    topic = history.location.pathname.replace('/help/', '')
  }
  let topicObj
  if (!topic) {
    topicObj = topics[0]
  } else {
    topicObj = topics.find(t => {
      return t.link === `/help/${topic}`
    })
  }
  // Assume we have a textfile otherwise show an error message.
  try {
    const textFile = require(`Configurations/Help/Text/${topicObj.textFile}.md`)
    return (
      <React.Fragment>
        <h2>{topicObj.title}</h2>
        <ReactMarkdown source={textFile} />
      </React.Fragment>
    )
  } catch (e) {
    console.error('Help topic not found.', e)
    return (
      <div className='mainHelpContent'>The selected help content could not be found.</div>
    )
  }
}

Help.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.object }
  ),
}
export default withRouter(Help)

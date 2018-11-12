import React from 'react'
import { PropTypes } from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { withRouter } from 'react-router'
import MainSide from '../../../Components/Shared/MainSide'
import { topics } from '../../../Configurations/Help'

const HelpText = ({ match }) => {
  // Get the topic slug from the url. If there there is no slug, show first topic in list.
  const { topic } = match.params
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
      <MainSide>
        <h2>{topicObj.title}</h2>
        <ReactMarkdown source={textFile} />
      </MainSide>
    )
  } catch (e) {
    console.error('Help topic not found.', e)
    return (
      <div className='mainHelpContent'>The selected help content could not be found.</div>
    )
  }
}

HelpText.propTypes = {
  match: PropTypes.shape(
    { params: PropTypes.object }
  ),
}
export default withRouter(HelpText)

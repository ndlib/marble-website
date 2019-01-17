import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown/with-html'

const MarkDownField = ({ metadata }) => {
  const { label, value } = metadata
  return (
    <React.Fragment>
      <dt>{label}</dt>
      <dd>
        <ReactMarkdown
          source={value}
          escapeHtml={false}
        />
      </dd>
    </React.Fragment>
  )
}

MarkDownField.propTypes = {
  metadata: PropTypes.object.isRequired,
}
export default MarkDownField

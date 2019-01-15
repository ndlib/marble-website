import React from 'react'
import PropTypes from 'prop-types'
import Card from 'Components/Shared/Card'
import pageUrlFromAtId from 'Functions/pageUrlFromAtId'
import urlContext from 'Functions/urlContext'
import { withRouter } from 'react-router'

export const RelatedItems = ({ currentManifest, match }) => {
  let { related } = currentManifest.data
  if (related) {
    if (!Array.isArray(related)) {
      related = [related]
    }

    return (
      <React.Fragment>
        <h2>Related Items</h2>
        {
          related.map(item => {
            return (
              <Card
                key={item['@id']}
                title={item['@id']}
                url={urlContext(pageUrlFromAtId(item['@id']), match)}
              />
            )
          })
        }
      </React.Fragment>
    )
  }
  return null
}

RelatedItems.propTypes = {
  currentManifest: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      context: PropTypes.string.isRequired,
      contextId: PropTypes.string.isRequired,
    }),
  }),
}

export default withRouter(RelatedItems)

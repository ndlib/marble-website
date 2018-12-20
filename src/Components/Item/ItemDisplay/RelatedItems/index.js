import React from 'react'
import PropTypes from 'prop-types'
import Card from 'Components/Shared/Card'
export const RelatedItems = ({ itemId }) => {
  // TODO: use real data & fix logic to match real manifest
  const items = [
    {
      id: itemId,
      relatedItems: [
        { id: '1234' },
        { id: '5678' },
        { id: '9abc' },
        { id: 'def0' },
      ],
    },
  ]
  const relatedItems = items.find(item => {
    return item.id === itemId
  }).relatedItems

  return (
    <React.Fragment>
      <h2>Related Items</h2>
      {
        relatedItems.map(item => {
          return (
            <Card
              key={item.id}
              title={item.id}
              url='/'
            />
          )
        })
      }
    </React.Fragment>
  )
}

RelatedItems.propTypes = {
  itemId: PropTypes.string.isRequired,
}

export default RelatedItems

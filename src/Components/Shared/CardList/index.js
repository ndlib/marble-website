import React from 'react'
import PropTypes from 'prop-types'
import Card from 'Components/Shared/Card'
import NotFound from 'Components/Shared/NotFound'

import pageUrlFromAtId from 'Functions/pageUrlFromAtId'
const CardList = ({ items, start, perPage }) => {
  // if we don't have a perPage limit, show all the things
  perPage = perPage || items.length
  // make sure we have items and we're not trying to start after the array end
  if (items && start < items.length) {
    return (
      <React.Fragment>
        {
          itemsForDisplay(items, start, perPage).map(item => {
            return (
              <Card
                key={item['@id']}
                title={item.label}
                image={null}
                url={pageUrlFromAtId(item['@id'])}
              />)
          })
        }
      </React.Fragment>
    )
  }
  return <NotFound />
}

CardList.propTypes = {
  items: PropTypes.array.isRequired,
  start: PropTypes.number.isRequired,
  perPage: PropTypes.number,
}

CardList.defaultProps = {
  start: 0,
}

const itemsForDisplay = (items, start, perPage) => {
  // use Math.min and array length so we don't overshoot the end of the array
  return items.slice(start, Math.min(start + perPage, items.length))
}

export default CardList

import React from 'react'
import PropTypes from 'prop-types'
import Card from 'Components/Shared/Card'
import NotFound from 'Components/Shared/NotFound'
import { MANIFEST_BASE_URL } from 'Configurations/apis'

const CardList = ({ items, start, perPage }) => {
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
                url={`/collection${item['@id'].replace(MANIFEST_BASE_URL, '/')}`}
              />)
          })
        }
      </React.Fragment>
    )
  }
  return <NotFound />
}

const itemsForDisplay = (items, start, perPage) => {
  // use Math.min and array length so we don't overshoot the end of the array
  return items.slice(start, Math.min(start + perPage, items.length))
}

CardList.propTypes = {
  items: PropTypes.array.isRequired,
  start: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
}
export default CardList

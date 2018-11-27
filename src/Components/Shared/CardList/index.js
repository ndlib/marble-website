import React from 'react'
import PropTypes from 'prop-types'
import Card from 'Components/Shared/Card'
import NotFound from 'Components/Shared/NotFound'
import { MANIFEST_BASE_URL } from 'Configurations/apis'

const CardList = ({ items, start, perPage }) => {
  if (items && start < items.length) {
    return (
      <React.Fragment>
        {
          items.slice(start, Math.min(start + perPage, items.length)).map(item => {
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

CardList.propTypes = {
  items: PropTypes.array.isRequired,
  start: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
}
export default CardList

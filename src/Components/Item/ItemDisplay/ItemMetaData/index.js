import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const ItemMetaData = ({ itemId }) => {
  // TODO : Use real data
  const metaData = [
    { label: 'Creator', value: 'Art Vandalay' },
    { label: 'Date', value: '1820s' },
    { label: 'Format', value: 'Folio' },
    { label: 'Collection', value: 'Inquisition Collection' },
    { label: 'Subject', value: 'Imports & Exports' },
    { label: 'Department', value: 'Rare Books & Special Collections' },
    { label: 'Restrictions & Rights', value: 'Public Domain' },
    { label: 'View Status', value: 'In storage' },
    { label: 'Contact', value: 'skenfoj@nd.edu' },
  ]
  return (
    <React.Fragment>
      <div className='itemId'>ID {itemId}</div>
      <h1>Title</h1>
      <dl className='metaData'>
        {
          metaData.map(md => {
            return (
              <React.Fragment key={`${md.label}${md.value}`}>
                <dt>{md.label}</dt><dd>{md.value}</dd>
              </React.Fragment>
            )
          })
        }
      </dl>
    </React.Fragment>
  )
}

ItemMetaData.propTypes = {
  itemId: PropTypes.string.isRequired,
}

export default ItemMetaData

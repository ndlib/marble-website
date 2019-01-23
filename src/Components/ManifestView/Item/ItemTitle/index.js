import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
const ItemTitle = ({ currentManifest }) => {
  const { label } = currentManifest.data
  return (
    <h1 className='itemTitle'>{label}</h1>
  )
}

ItemTitle.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}

export default ItemTitle

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'
import './style.css'

const Card = ({ title, image, url }) => {
  if (title && url) {
    return (
      <div className='card'>
        <Link to={url}>
          <img
            className='cardImage'
            src={image || DEFAULT_ITEM_IMAGE}
            alt={title}
          />
          <h3>{title}</h3>
        </Link>
      </div>
    )
  }
  return null
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
}
export default Card

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'
import urlContext from 'Functions/urlContext'
import './style.css'

export const Card = ({ title, image, url, match }) => {
  if (title && url) {
    return (
      <div className='card'>
        <Link to={urlContext(url, match)}>
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      context: PropTypes.string,
      contextId: PropTypes.string,
    }),
  }),
}
export default withRouter(Card)

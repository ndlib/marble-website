import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'
import urlContext from 'Functions/urlContext'
import './style.css'

export const Card = ({ title, image, url, className, children, match }) => {
  if (title && url) {
    const displayClass = className ? `card ${className}` : 'card'
    return (
      <Link
        to={urlContext(url, match)}
        className={displayClass}
      >

        <img
          className='cardImage'
          src={image || DEFAULT_ITEM_IMAGE}
          alt={title}
        />
        <div>
          <h3>{title}</h3>
          <div className='additional'>
            {children}
          </div>
        </div>
      </Link>
    )
  }
  return null
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  match: PropTypes.shape({
    params: PropTypes.shape({
      context: PropTypes.string,
      contextId: PropTypes.string,
    }),
  }),
}
export default withRouter(Card)

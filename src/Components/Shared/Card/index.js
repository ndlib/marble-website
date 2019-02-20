import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'
import urlContext from 'Functions/urlContext'
import './style.css'
import IIIFImage from 'Components/Shared/IIIFImage'

export const Card = ({ title, image, url, className, children, match }) => {
  if (title && url) {
    const displayClass = className ? `card ${className}` : 'card'
    return (
      <Link
        to={urlContext(url, match)}
        className={displayClass}
      >
        <IIIFImage
          image={image}
          settings={{ alt: title }}
          previewBlur
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
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
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

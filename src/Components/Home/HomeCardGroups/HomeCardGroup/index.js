import React from 'react'
import PropTypes from 'prop-types'
import IIIFImage from 'Components/Shared/IIIFImage'
import { Link } from 'react-router-dom'

const HomeCardGroup = ({ label, items }) => {
  return (
    <div className='featured'>
      <h2>{label}</h2>
      <div className='grid-x grid-margin-x'>
        {
          items.map((item, index) => {
            return (
              <div className='cell large-4' key={index}>
                <Link to={item.target || '/'} >
                  <figure>
                    <IIIFImage
                      image={item.image}
                      alt={item.label}
                    />
                    <figcaption>{item.label}</figcaption>
                  </figure>
                </Link>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

HomeCardGroup.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

export default HomeCardGroup

import React from 'react'
import PropTypes from 'prop-types'
import IIIFImage from 'Components/Shared/IIIFImage'

const HomeCardGroup = ({ title, items }) => {
  return (
    <div className='featured'>
      <h2>{title}</h2>
      <div className='grid-x grid-margin-x'>
        {
          items.map((item, index) => {
            return (
              <div className='cell large-4' key={index}>
                <figure>
                  <IIIFImage
                    image={item.image}
                    alt={item.title}
                  />
                  <figcaption>{item.title}</figcaption>
                </figure>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

HomeCardGroup.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

export default HomeCardGroup

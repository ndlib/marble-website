import React from 'react'
import PropTypes from 'prop-types'
import IIIFImage from 'Components/Shared/IIIFImage'
import CardLink from 'Components/Shared/CardLink'

const HomeCardGroup = ({ label, items }) => {
  return (
    <article className='featured'>
      <h2>{label}</h2>
      <div className='grid-x grid-margin-x'>
        {
          items.map((item, index) => {
            return (
              <section className='cell large-4' key={index}>
                <CardLink url={item.target || '/'} >
                  <figure>
                    <IIIFImage
                      image={item.image}
                      alt={item.label}
                    />
                    <figcaption>{item.label}</figcaption>
                  </figure>
                </CardLink>
              </section>

            )
          })
        }
      </div>
    </article>
  )
}

HomeCardGroup.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

export default HomeCardGroup

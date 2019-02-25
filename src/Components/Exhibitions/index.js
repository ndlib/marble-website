import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { items } from 'Configurations/Exhibitions'
import Card from 'Components/Shared/Card'
const Exhibitions = () => {
  return (
    <React.Fragment>
      <ExhibitionCardList
        items={items}
        className='exhibitionCard'
      />
    </React.Fragment>
  )
}

export default Exhibitions

const ExhibitionCardList = (items, className) => {
  if (items) {
    return (
      <div className='cardList'>
        {
          items.map(item => {
            return (
              <Card
                className={className}
                key={item.key}
                title={item.label}
                image={item.image}
                url={item.url}
              />
            )
          })
        }
      </div>
    )
  }
}

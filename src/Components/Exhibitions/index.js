import React from 'react'
import './style.css'
import { items } from 'Configurations/Exhibitions'
import Card from 'Components/Shared/Card'
const Exhibitions = () => {
  return (
    <ExhibitionCardList
      items={items}
      className='exhibitionCard'
    />
  )
}

export default Exhibitions

const ExhibitionCardList = (items, className) => {
  if (items) {
    console.log(items)
    return (
      <div className='cardList'>
        {
          items.items.map(item => {
            return (
              <Card
                className={className}
                key={item['@id']}
                title={item.title}
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

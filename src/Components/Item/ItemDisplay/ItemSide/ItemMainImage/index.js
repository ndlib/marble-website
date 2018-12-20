import React from 'react'
import ExpandIcon from './ExpandIcon'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'
import './style.css'

const ItemMainImage = () => {
  const image = DEFAULT_ITEM_IMAGE
  return (
    <div className='itemImage'>
      <img
        src={image || DEFAULT_ITEM_IMAGE}
        alt={'title'}
      />
      <ExpandIcon />
    </div>
  )
}

export default ItemMainImage

import React from 'react'
import { DEFAULT_ITEM_IMAGE } from 'Configurations/customizations'
import './style.css'

const AlternateImage = () => {
  const image = DEFAULT_ITEM_IMAGE
  return (
    <div className='alternateImage'>
      <img
        src={image || DEFAULT_ITEM_IMAGE}
        alt={'title'}
      />
    </div>
  )
}
export default AlternateImage

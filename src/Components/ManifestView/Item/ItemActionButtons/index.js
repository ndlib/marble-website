import React from 'react'
import ActionButton from './ActionButton'
import print from 'Static/icons/svg/baseline-print-24px.svg'
import share from 'Static/icons/svg/baseline-share-24px.svg'
import bookmark from 'Static/icons/svg/baseline-bookmark_border-24px.svg'
import bookmarkActive from 'Static/icons/svg/baseline-bookmark-24px.svg'
import download from 'Static/icons/svg/baseline-save_alt-24px.svg'
import './style.css'

const ItemActionButtons = () => {
  return (
    <div className='actionButtons'>
      <ActionButton
        name='download'
        action={downloadAction}
        icon={download}
      />
      <ActionButton
        name='bookmark'
        action={bookmarkAction}
        icon={bookmark}
        activeIcon={bookmarkActive}
        isActive
      />
      <ActionButton
        name='share'
        action={shareAction}
        icon={share}
      />
      <ActionButton
        name='print'
        action={printAction}
        icon={print}
      />
    </div>
  )
}

export const downloadAction = () => {
  console.log('download')
}

export const bookmarkAction = () => {
  console.log('bookmark')
}

export const shareAction = () => {
  console.log('share')
}
export const printAction = () => {
  console.log('print')
}
export default ItemActionButtons

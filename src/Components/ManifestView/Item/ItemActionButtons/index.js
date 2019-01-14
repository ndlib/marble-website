import React from 'react'
import ActionButton from './ActionButton'
import DownloadIcon from './DownloadIcon'
import BookmarkIcon from './BookmarkIcon'
import BookmarkActiveIcon from './BookmarkActiveIcon'
import ShareIcon from './ShareIcon'
import './style.css'

const ItemActionButtons = () => {
  return (
    <div className='actionButtons'>
      <ActionButton
        name='download'
        action={downloadAction}
        icon={DownloadIcon}
      />
      <ActionButton
        name='bookmark'
        action={bookmarkAction}
        icon={BookmarkIcon}
        activeIcon={BookmarkActiveIcon}
        isActive
      />
      <ActionButton
        name='share'
        action={shareAction}
        icon={ShareIcon}
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
export default ItemActionButtons

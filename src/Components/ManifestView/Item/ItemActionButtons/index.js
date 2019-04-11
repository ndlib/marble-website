import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'
import ActionButton from './ActionButton'
import ManifestLink from '../../ManifestLink'
import print from 'Static/icons/svg/baseline-print-24px.svg'
import share from 'Static/icons/svg/baseline-share-24px.svg'
import bookmark from 'Static/icons/svg/baseline-bookmark_border-24px.svg'
import bookmarkActive from 'Static/icons/svg/baseline-bookmark-24px.svg'
import downloadImg from 'Static/icons/svg/baseline-save_alt-24px.svg'

import './style.css'

const ItemActionButtons = ({ manifest }) => {
  return (
    <section className='actionButtons'>
      <ManifestLink manifestUrl={typy(manifest, 'data[\'@id\']').safeString} />
      <ActionButton
        name='download'
        action={printAction}
        icon={downloadImg}
      />
      <ActionButton
        name='print'
        action={printAction}
        icon={print}
      />
      <ActionButton
        name='share'
        action={shareAction}
        icon={share}
      />
      <ActionButton
        name='bookmark'
        action={bookmarkAction}
        icon={bookmark}
        activeIcon={bookmarkActive}
        isActive
      />
    </section>
  )
}

ItemActionButtons.propTypes = {
  manifest: PropTypes.object.isRequired,
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

export const downloadAction = () => {
  console.log('download')
}
export default ItemActionButtons

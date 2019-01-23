import React from 'react'
// import PropTypes from 'prop-types'
import downloadImg from 'Static/icons/svg/baseline-save_alt-24px.svg'
import './style.css'
const ItemDownloads = () => {
  return (
    <button className='itemDownloads'>
      <img
        src={downloadImg}
        alt='Download'
      />
      <span>Download Options</span>
    </button>
  )
}

// ItemDownloads.propTypes = {
//   currentManifest: PropTypes.object.isRequired,
// }

export default ItemDownloads

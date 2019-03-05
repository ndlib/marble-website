import React from 'react'
import bannerImage from 'Static/images/banner.jpg'
const center = {
  textAlign: 'center',
  fontSize: '32px',
}
const HomeBanner = () => {
  return (
    <div className='banner'>
      <img
        src={bannerImage}
        className='bannerImage'
        alt='home page banner'
      />
      <div className='imageCaption'>
        <div className='captionFrame'>
          <h1 style={center}>Explore digitized artwork, rare books, artifacts, and archival materials from the Snite Museum of Art and Hesburgh Libraries.</h1>
        </div>
      </div>
      <div className='imageCitation'>
        <p className='citation'><sub>Unrecorded Chinese artists,  <em>Untitled: Patriarch En Route with Attendants</em>,  20th century, woodcut with watercolor. <br />Snite Museum of Art, University of Notre Dame, Transfer from the Rare Books and Special Collections Department, 1977.005.045.</sub></p>
      </div>
    </div>
  )
}

export default HomeBanner

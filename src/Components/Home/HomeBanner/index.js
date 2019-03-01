import React from 'react'
import bannerImage from 'Static/images/snite.png'
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
          <h1>Explore digitized artwork, rare books, artifacts, and archival materials from the Snite Museum of Art and Hesburgh Libraries.</h1>
          <p><sub>Giovanni, <em>Memento Mori: Death Comes to the Table</em>, 1620-1659, oil on canvas. Snite Museum of Art, University of Notre Dame, Gift of an anonymous benefactor; Museum purchase by exchange, Mrs. James W. Alsdorf; and acquired with funds provided by Mr. and Mrs. Robert Raclin, Mr. and Mrs. Russell G. Ashbaugh Jr., and Mr. Joseph R. Skelton, 1999.024.</sub></p>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner

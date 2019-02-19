import React from 'react'
import SearchBox from 'Components/Shared/SearchBox'
import './style.css'

const Home = () => {
  return (
    <React.Fragment>
      <SearchBox />
      <div className='banner'>
        <img
          src='snite.png'
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
      <div className='featured'>
        <h2>Featured</h2>
        <div className='grid-x grid-margin-x'>
          <div className='cell large-4'>
            <figure>
              <img
                src='01.jpg'
                className='01'
                alt='home page banner'
              />
              <figcaption>[Title of DEC Exhibition]</figcaption>
            </figure>
          </div>
          <div className='cell large-4'>
            <figure>
              <img
                src='02.jpg'
                className='02'
                alt='home page banner'
              />
              <figcaption>Highlights</figcaption>
            </figure>
          </div>
          <div className='cell large-4'>
            <figure>
              <img
                src='03.jpg'
                className='03'
                alt='home page banner'
              />
              <figcaption>Recently Added</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className='browseBy featured'>
        <h2>Browse by</h2>
        <div className='grid-x grid-margin-x'>
          <div className='cell large-4'>
            <figure>
              <img
                src='04.jpg'
                className='04'
                alt='home page banner'
              />
              <figcaption>Time Period</figcaption>
            </figure>
          </div>
          <div className='cell large-4'>
            <figure>
              <img
                src='05.jpg'
                className='05'
                alt='home page banner'
              />
              <figcaption>World Region</figcaption>
            </figure>
          </div>
          <div className='cell large-4'>
            <figure>
              <img
                src='06.jpg'
                className='06'
                alt='home page banner'
              />
              <figcaption>Theme</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home

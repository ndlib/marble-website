import React from 'react'
import SearchBox from 'Components/Shared/SearchBox'
import './style.css'

const Home = () => {
  return (
    <React.Fragment>
      <SearchBox />
      <div className='banner'>
        <img
          src='head.png'
          className='bannerImage'
          alt='home page banner'
        />
        <div className='imageCaption'>
          <div className='captionFrame'>
            <h1>Image Title</h1>
            <p>Image Caption</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home

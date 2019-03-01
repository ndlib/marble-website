import React from 'react'
import SearchBox from 'Components/Shared/SearchBox'
import HomeBanner from './HomeBanner'
import HomeCardGroups from './HomeCardGroups'
import image1 from 'Static/images/01.jpg'
import image2 from 'Static/images/02.jpg'
import image3 from 'Static/images/03.jpg'
import image4 from 'Static/images/04.jpg'
import image5 from 'Static/images/05.jpg'
import image6 from 'Static/images/06.jpg'
import './style.css'

const groups = [
  {
    label: 'Featured',
    items: [
      { image: image1, label: '[Title of DEC Exhibition]' },
      { image: image2, label: 'Highlights' },
      { image: image3, label: 'Recently Added' },
    ],
  },
  {
    label: 'Browse by',
    items: [
      { image: image4, label: 'Time', target: '/browse/timeperiods' },
      { image: image5, label: 'Place', target: '/browse/places' },
      { image: image6, label: 'Theme', target: '/browse/themes' },
    ],
  },
]
const Home = () => {
  return (
    <React.Fragment>
      <SearchBox />
      <HomeBanner />
      <HomeCardGroups groups={groups} />
    </React.Fragment>
  )
}

export default Home

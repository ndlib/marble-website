import React from 'react'
import SearchBox from 'Components/Shared/SearchBox'
import HomeBanner from './HomeBanner'
import HomeCardGroups from './HomeCardGroups'
import './style.css'

const groups = [
  {
    label: 'Featured',
    items: [
      { image: '01.jpg', label: '[Title of DEC Exhibition]' },
      { image: '02.jpg', label: 'Highlights' },
      { image: '03.jpg', label: 'Recently Added' },
    ],
  },
  {
    label: 'Browse by',
    items: [
      { image: '04.jpg', label: 'Time', target: '/browse/timeperiods' },
      { image: '05.jpg', label: 'Place', target: '/browse/places' },
      { image: '06.jpg', label: 'Theme', target: '/browse/themes' },
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

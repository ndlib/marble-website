import React from 'react'
import SearchBox from 'Components/Shared/SearchBox'
import HomeBanner from './HomeBanner'
import HomeCardGroups from './HomeCardGroups'
import './style.css'

const groups = [
  {
    title: 'Featured',
    items: [
      { image: '01.jpg', title: '[Title of DEC Exhibition]' },
      { image: '02.jpg', title: 'Highlights' },
      { image: '03.jpg', title: 'Recently Added' },
    ],
  },
  {
    title: 'Browse by',
    items: [
      { image: '04.jpg', title: 'Time Period' },
      { image: '05.jpg', title: 'World Region' },
      { image: '06.jpg', title: 'Theme' },
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

import React from 'react'
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
      { image: image1, label: 'In a Civilized Nation: Newspapers, Magazines and the Print Revolution in the 19th-Century Peru', target: 'https://collections.library.nd.edu/3df879828f/in-a-civilized-nation' },
      { image: image2, label: 'Highlights' },
      { image: image3, label: 'Recently Added' },
    ],
  },
  {
    label: 'Browse by',
    items: [
      { image: image6, label: 'Time', target: '/browse/timeperiods' },
      { image: image5, label: 'Place', target: '/browse/places' },
      { image: image4, label: 'Theme', target: '/browse/themes' },
    ],
  },
]
const Home = () => {
  return (
    <React.Fragment>
      <HomeBanner />
      <main id='main'>
        <article>
          <HomeCardGroups groups={groups} />
        </article>
      </main>
    </React.Fragment>
  )
}

export default Home

import React from 'react'

import Sidebar from 'Components/Shared/Sidebar'
import AboutMain from './AboutMain'
import { sections } from 'Configurations/About'
const About = () => {
  return (
    <div className='aboutContent'>
      <Sidebar
        title='About This Project'
        items={sections}
      />
      <AboutMain />
    </div>
  )
}

export default About

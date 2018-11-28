import React from 'react'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import AboutMain from './AboutMain'
import { sections } from 'Configurations/About'
const About = () => {
  return (
    <ContentLeftSidebar
      className='aboutContent'
      sidebarTitle='About This Project'
      sidebarItems={sections}
    >
      <AboutMain />
    </ContentLeftSidebar>
  )
}

export default About

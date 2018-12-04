import React from 'react'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import AboutMain from './AboutMain'
import { sections } from 'Configurations/About'
import LinkList from 'Components/Shared/LinkList'
const About = () => {
  return (
    <ContentLeftSidebar
      sidebarTitle='About This Project'
      sidebarContent={<LinkList items={sections} />}
    >
      <AboutMain />
    </ContentLeftSidebar>
  )
}

export default About

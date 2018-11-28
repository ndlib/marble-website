import React from 'react'
import HelpText from './HelpText'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import { topics } from 'Configurations/Help'

const Help = () => {
  return (
    <ContentLeftSidebar
      sidebarTitle='Help'
      sidebarItems={topics}
    >
      <HelpText />
    </ContentLeftSidebar>
  )
}

export default Help

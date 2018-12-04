import React from 'react'
import HelpText from './HelpText'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import LinkList from 'Components/Shared/LinkList'
import { topics } from 'Configurations/Help'

const Help = () => {
  return (
    <ContentLeftSidebar
      sidebarTitle='Help'
      sidebarContent={<LinkList items={topics} />}
    >
      <HelpText />
    </ContentLeftSidebar>
  )
}

export default Help

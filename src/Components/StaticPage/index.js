import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {
  ABOUT_CONTEXT,
  HELP_CONTEXT,
} from 'Constants/pageContexts'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import LinkList from 'Components/Shared/LinkList'
import About from './About'
import Help from './Help'
import NotFound from 'Components/Shared/NotFound'

export const StaticPage = ({ match }) => {
  const { pageType } = match.params
  let title = ''
  let topics = []
  let content
  switch (pageType) {
    case ABOUT_CONTEXT:
      title = 'About This Project'
      topics = require('Configurations/About').topics
      content = <About />
      break
    case HELP_CONTEXT:
      title = 'Help'
      topics = require('Configurations/Help').topics
      content = <Help />
      break
    default:
      // default should never be called because router in App requires a valid context
      return <NotFound />
  }

  return (
    <ContentLeftSidebar
      sidebarTitle={title}
      sidebarContent={<LinkList items={topics} />}
    >
      {content}
    </ContentLeftSidebar>
  )
}

StaticPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pageType: PropTypes.string.isRequired,
    }),
  }),
}
export default withRouter(StaticPage)

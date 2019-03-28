import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {
  ABOUT_CONTEXT,
  HELP_CONTEXT,
  LEARN_CONTEXT,
} from 'Constants/pageContexts'
import ContentLeftSidebar from 'Components/Layouts/ContentLeftSidebar'
import LinkList from 'Components/Shared/LinkList'
import About from './About'
import Help from './Help'
import NotFound from 'Components/Shared/NotFound'
import Learn from './Learn'

export const StaticPage = ({ match }) => {
  const { pageType } = match.params
  let title = ''
  let topics = []
  let content
  switch (pageType) {
    case ABOUT_CONTEXT:
      title = 'About'
      // topics = require('Configurations/About').topics
      content = <About />
      break
    case HELP_CONTEXT:
      title = 'Help'
      topics = require('Configurations/Help').topics
      content = <Help />
      break
    case LEARN_CONTEXT:
      title = 'Learn'
      // topics = require('Configurations/Learn').topics
      content = <Learn />
      break
    default:
      // default should never be called because router in App requires a valid context
      return <NotFound />
  }
  if (topics.length > 0) {
    return (
      <article>
        <h1 className='staticTitle'>{title}</h1>
        <ContentLeftSidebar
          sidebarContent={<LinkList items={topics} />}
        >
          {content}
        </ContentLeftSidebar>
      </article>
    )
  }
  return (
    <main id='main'>
      <article>
        { content }
      </article>
    </main>
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

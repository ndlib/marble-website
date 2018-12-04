import React from 'react'
import PropTypes from 'prop-types'
import MainSide from './MainSide'
import Sidebar from './Sidebar'

const ContentLeftSidebar = ({
  className,
  sidebarTitle,
  sidebarContent,
  children,
}) => {
  return (
    <div className={`contentLeftSidebar ${className}`}>
      <Sidebar
        title={sidebarTitle}
      >{sidebarContent}</Sidebar>
      <MainSide>{children}</MainSide>
    </div>
  )
}

ContentLeftSidebar.propTypes = {
  className: PropTypes.string,
  sidebarContent: PropTypes.node.isRequired,
  sidebarTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}
export default ContentLeftSidebar

import React from 'react'
import PropTypes from 'prop-types'
import MainSide from './MainSide'
import Sidebar from './Sidebar'
import DisplayMetadata from './DisplayMetadata'
import './style.css'
const ContentLeftSidebar = ({
  className,
  sidebarTitle,
  sidebarContent,
  children,
  metadata,
}) => {
  return (
    <div className={`contentLeftSidebar ${className}`}>
      <Sidebar
        title={sidebarTitle}
      >{sidebarContent}</Sidebar>
      <MainSide>{children}</MainSide>
      <DisplayMetadata metadata={metadata} />
    </div>
  )
}

ContentLeftSidebar.propTypes = {
  className: PropTypes.string,
  sidebarContent: PropTypes.node,
  sidebarTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  metadata: PropTypes.node,
}
export default ContentLeftSidebar

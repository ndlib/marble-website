import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import MainSide from './MainSide'
import Sidebar from './Sidebar'
import DisplayMetadata from './DisplayMetadata'
import imgIIIF from './iiif.png'
import './style.css'
const ContentLeftSidebar = ({
  className,
  sidebarTitle,
  sidebarContent,
  children,
  metadata,
  manifest,
}) => {
  return (
    <div className={`contentLeftSidebar ${className}`}>
      <Sidebar
        title={sidebarTitle}
      >{sidebarContent}
        <DisplayMetadata metadata={metadata} />
        <a href={manifest}>
          <img src={imgIIIF} />
        </a>
      </Sidebar>
      <MainSide>{children}</MainSide>
    </div>
  )
}

ContentLeftSidebar.propTypes = {
  className: PropTypes.string,
  sidebarContent: PropTypes.node,
  sidebarTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  metadata: PropTypes.object,
}
export default ContentLeftSidebar

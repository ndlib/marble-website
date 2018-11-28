import React from 'react'
import PropTypes from 'prop-types'
import MainSide from './MainSide'
import Sidebar from './Sidebar'

const ContentLeftSidebar = ({
  className,
  sidebarTitle,
  sidebarItems,
  sidebarText,
  children,
}) => {
  return (
    <div className={`contentLeftSidebar ${className}`}>
      <Sidebar
        title={sidebarTitle}
        items={sidebarItems}
        text={sidebarText}
      />
      <MainSide>{children}</MainSide>
    </div>
  )
}

ContentLeftSidebar.propTypes = {
  className: PropTypes.string,
  sidebarText: PropTypes.string,
  sidebarItems: PropTypes.array,
  sidebarTitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
}
export default ContentLeftSidebar

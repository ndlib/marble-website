import React from 'react'
import PropTypes from 'prop-types'
const ActionButton = ({ name, action, icon, activeIcon, isActive, altText }) => {
  return (
    <button
      className={`actionButton ${name}`}
      onClick={() => {
        action()
      }}
    >
      <img src={isActive ? activeIcon : icon} alt={altText || name} />
    </button>
  )
}
ActionButton.propTypes = {
  name: PropTypes.string.isRequired,
  altText: PropTypes.string,
  action: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  activeIcon: PropTypes.string,
  isActive: PropTypes.bool,
}
export default ActionButton

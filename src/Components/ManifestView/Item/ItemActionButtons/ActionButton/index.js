import React from 'react'
import PropTypes from 'prop-types'
const ActionButton = ({ name, action, icon, activeIcon, isActive }) => {
  return (
    <button
      className={`actionButton ${name}`}
      onClick={() => {
        action()
      }}
    >
      {
        isActive
          ? activeIcon()
          : icon()
      }
    </button>
  )
}
ActionButton.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  icon: PropTypes.func.isRequired,
  activeIcon: PropTypes.func,
  isActive: PropTypes.bool,
}
export default ActionButton

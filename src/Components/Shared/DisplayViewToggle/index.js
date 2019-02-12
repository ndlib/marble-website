import React from 'react'
import PropTypes from 'prop-types'
import ToggleButton from './ToggleButton'
import './style.css'

import listIcon from 'Static/icons/svg/baseline-view_list-24px.svg'
import gridIcon from 'Static/icons/svg/baseline-view_module-24px.svg'

export const DisplayViewToggle = ({ reducer }) => {
  return (
    <div className='displayViewToggle'>
      <ToggleButton
        icon={listIcon}
        option='list'
        reducer={reducer}
      />
      <ToggleButton
        icon={gridIcon}
        option='grid'
        reducer={reducer}
      />
    </div>
  )
}

DisplayViewToggle.propTypes = {
  reducer: PropTypes.object.isRequired,
}

export default DisplayViewToggle

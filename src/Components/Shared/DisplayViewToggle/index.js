import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { viewChange } from 'Store/actions/searchActions'
import './style.css'

import listIcon from 'Static/icons/svg/baseline-view_list-24px.svg'
import gridIcon from 'Static/icons/svg/baseline-view_module-24px.svg'

export const DisplayViewToggle = ({ reducer, dispatch }) => {
  const { view } = reducer
  let gridClass = 'other'
  let listClass = 'selected'
  if (view === 'grid') {
    gridClass = 'selected'
    listClass = 'other'
  }
  return (
    <div className='displayViewToggle'>
      <input
        type='image'
        src={listIcon}
        className={listClass}
        alt='listview'
        onClick={() => {
          dispatch(viewChange('list'))
        }}
      />
      <input
        type='image'
        src={gridIcon}
        className={gridClass}
        alt='gridview'
        onClick={() => {
          dispatch(viewChange('grid'))
        }}
      />
    </div>
  )
}

DisplayViewToggle.propTypes = {
  reducer: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}
export default withRouter(connect(mapStateToProps)(DisplayViewToggle))

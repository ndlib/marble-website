import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import './style.css'

import listIcon from 'Static/icons/svg/baseline-view_list-24px.svg'
import gridIcon from 'Static/icons/svg/baseline-view_module-24px.svg'

export const DisplayViewToggle = ({ reducer, dispatch }) => {
  const actions = getActions(reducer)
  const { view } = reducer
  const classes = getClasses(view)

  return (
    <div className='displayViewToggle'>
      <input
        type='image'
        src={listIcon}
        className={classes.list}
        alt='listview'
        onClick={() => {
          dispatch(actions.viewChange('list'))
        }}
      />
      <input
        type='image'
        src={gridIcon}
        className={classes.grid}
        alt='gridview'
        onClick={() => {
          dispatch(actions.viewChange('grid'))
        }}
      />
    </div>
  )
}

DisplayViewToggle.propTypes = {
  reducer: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export const getActions = (reducer) => {
  let actions
  if (reducer.manifests) {
    actions = require('Store/actions/manifestActions')
  } else {
    actions = require('Store/actions/searchActions')
  }
  return actions
}

export const getClasses = (view) => {
  let grid = 'other'
  let list = 'selected'
  if (view === 'grid') {
    grid = 'selected'
    list = 'other'
  }
  return { grid: grid, list: list }
}
export const mapStateToProps = (state) => {
  return { ...state }
}

export default withRouter(connect(mapStateToProps)(DisplayViewToggle))

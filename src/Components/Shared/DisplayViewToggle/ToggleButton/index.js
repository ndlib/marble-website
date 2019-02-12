import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const ToggleButton = ({ icon, option, reducer, dispatch }) => {
  const classes = getClasses(reducer.view)
  const actions = getActions(reducer)
  return (
    <input
      type='image'
      src={icon}
      className={classes[option]}
      alt={`${option} view`}
      onClick={() => {
        dispatch(actions.viewChange(option))
      }}
    />
  )
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

export const getActions = (reducer) => {
  let actions
  if (reducer.manifests) {
    actions = require('Store/actions/manifestActions')
  } else {
    actions = require('Store/actions/searchActions')
  }
  return actions
}
export const mapStateToProps = (state) => {
  return { ...state }
}

ToggleButton.propTypes = {
  icon: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  reducer: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(mapStateToProps)(ToggleButton)

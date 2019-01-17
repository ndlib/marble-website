import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import listIcon from 'Static/icons/svg/baseline-view_list-24px.svg'
import gridIcon from 'Static/icons/svg/baseline-view_module-24px.svg'

let grid, list
export const ResultsView = ({ view }) => {
  if (view === 'grid') {
    grid = 'selected'
    list = 'other'
  } else {
    grid = 'other'
    list = 'selected'
  }
  return (
    <React.Fragment>
      <div className='resultsview'>
        <input type='image' src={listIcon} className={list} alt='listview' />
        <input type='image' src={gridIcon} className={grid} alt='gridview' />
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return { view: state.searchReducer.view }
}

ResultsView.propTypes = {
  view: PropTypes.string,
}

export default withRouter(connect(mapStateToProps)(ResultsView))

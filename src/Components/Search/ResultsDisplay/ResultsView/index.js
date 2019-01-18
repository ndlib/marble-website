import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import listIcon from 'Static/icons/svg/baseline-view_list-24px.svg'
import gridIcon from 'Static/icons/svg/baseline-view_module-24px.svg'

export const ResultsView = ({ view }) => {
  let gridClass = 'other'
  let listClass = 'selected'
  if (view === 'grid') {
    gridClass = 'selected'
    listClass = 'other'
  }
  return (
    <div className='resultsview'>
      <input type='image' src={listIcon} className={listClass} alt='listview' />
      <input type='image' src={gridIcon} className={gridClass} alt='gridview' />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { view: state.searchReducer.view }
}

ResultsView.propTypes = {
  view: PropTypes.string,
}

export default withRouter(connect(mapStateToProps)(ResultsView))

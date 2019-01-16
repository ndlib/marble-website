import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { updatePage } from 'Store/actions/searchActions'

import listIMG from './list.png'
import gridIMG from './grid.png'

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
        <input type='image' src={listIMG} className={list} alt='listview' />
        <input type='image' src={gridIMG} className={grid} alt='gridview'/>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return { view: state.searchReducer.view }
}

export const changeView = (e, clicked) => {
  (history.push('/search?terms=' + terms + '&perpage=12&page=1&view=' + clicked))
  dispatch(updatePage(e.value, terms, 1))
}

ResultsView.propTypes = {
  dispatch: PropTypes.func,
  terms: PropTypes.string,
  view: PropTypes.string,
  history: PropTypes.object,
}

export default withRouter(connect(mapStateToProps)(ResultsView))

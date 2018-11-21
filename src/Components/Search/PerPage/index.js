import React from 'react'
import './style.css'
import Select from 'react-select'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { changePage } from 'Store/actions/searchActions'

const options = [
  { value: 10, label: '10/page' },
  { value: 20, label: '20/page' },
  { value: 30, label: '30/page' },
  { value: 40, label: '40/page' },
  { value: 50, label: '50/page' },
]

export const PerPage = ({ dispatch, terms, perpage, history }) => {
  return (
    <React.Fragment>
      <div className='perpage'>
        <Select options={options} onChange={e => handleChange(e, terms, history, dispatch)} placeholder={perpage + '/page'} selectedValue={perpage} />
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return { terms: state.searchReducer.terms }
}

const handleChange = (e, terms, history, dispatch) => {
  (history.push('/search?terms=' + terms + '&perpage=' + e.value + '&page=1'))
  dispatch(changePage(e.value, terms, 1))
}

export default withRouter(connect(mapStateToProps)(PerPage))

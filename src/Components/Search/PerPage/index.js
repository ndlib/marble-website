import React from 'react'
import './style.css'
import Select from 'react-select'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { changePerPage } from '../../../Store/actions/searchActions'

const options = [
  { value: 10, label: '10/page' },
  { value: 20, label: '20/page' },
  { value: 30, label: '30/page' },
  { value: 40, label: '40/page' },
  { value: 50, label: '50/page' },
]

export const PerPage = ({ dispatch, terms }) => {
  return (
    <React.Fragment>
      <div className='perpage'>
        <Select options={options} onChange={e => handleChange(e, terms, dispatch)} placeholder='10/page' />
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return { terms: state.searchReducer.terms }
}

const handleChange = (e, terms, dispatch) => {
  dispatch(changePerPage(e.value, terms))
}

export default connect(mapStateToProps)(PerPage)

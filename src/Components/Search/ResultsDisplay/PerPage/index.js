import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import searchUrl from 'Functions/searchUrl'
import './style.css'

const options = [
  { value: 12, label: '12/page' },
  { value: 24, label: '24/page' },
  { value: 36, label: '36/page' },
  { value: 48, label: '48/page' },
  { value: 60, label: '60/page' },
]

export const PerPage = ({ searchReducer, history }) => {
  let { terms, perpage, view } = searchReducer
  perpage = parseInt(perpage, 10) || 12
  return (
    <div className='perpage'>
      <Select
        options={options}
        onChange={e => handleChange(e, terms, history, view)}
        placeholder={perpage + '/page'}
        selectedValue={perpage}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { ...state }
}

export const handleChange = (e, terms, history, view) => {
  history.push(searchUrl(terms, e.value, 1, view))
}

PerPage.propTypes = {
  history: PropTypes.object,
  searchReducer: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps)(PerPage))

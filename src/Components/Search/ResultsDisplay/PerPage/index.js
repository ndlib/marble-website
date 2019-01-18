import React from 'react'
import './style.css'
import Select from 'react-select'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

const options = [
  { value: 12, label: '12/page' },
  { value: 24, label: '24/page' },
  { value: 36, label: '36/page' },
  { value: 48, label: '48/page' },
  { value: 60, label: '60/page' },
]

export const PerPage = ({ searchReducer, history, view }) => {
  let { terms, perpage } = searchReducer
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
  history.push(`/search?terms=${terms}&perpage=${e.value}&page=1&view=${view}`)
}

PerPage.propTypes = {
  history: PropTypes.object,
  view: PropTypes.string,
  searchReducer: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps)(PerPage))

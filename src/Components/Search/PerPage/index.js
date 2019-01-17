import React from 'react'
import './style.css'
import Select from 'react-select'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { updatePage } from 'Store/actions/searchActions'

const options = [
  { value: 12, label: '12/page' },
  { value: 24, label: '24/page' },
  { value: 36, label: '36/page' },
  { value: 48, label: '48/page' },
  { value: 60, label: '60/page' },
]

export const PerPage = ({ dispatch, terms, perpage, history, view }) => {
  return (
    <React.Fragment>
      <div className='perpage'>
        <Select
          options={options}
          onChange={e => handleChange(e, terms, history, dispatch, view)}
          placeholder={perpage + '/page'}
          selectedValue={perpage}
        />
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return { terms: state.searchReducer.terms }
}

export const handleChange = (e, terms, history, dispatch, view) => {
  history.push(`/search?terms=${terms}&perpage=${e.value}&page=1&view=${view}`)
  dispatch(updatePage(e.value, terms, 1))
}

PerPage.propTypes = {
  dispatch: PropTypes.func,
  terms: PropTypes.string,
  perpage: PropTypes.number,
  history: PropTypes.object,
  view: PropTypes.string,
}

export default withRouter(connect(mapStateToProps)(PerPage))

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const ResultIndex = ({ searchReducer, index }) => {
  const { page, perpage } = searchReducer
  return (
    <span className='resultnum'>{ displayNumber(perpage, page, index) }</span>
  )
}

ResultIndex.propTypes = {
  searchReducer: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

export const mapStateToProps = (state) => {
  return { ...state }
}

export const displayNumber = (perpage, page, index) => {
  return (perpage * (page - 1)) + index + 1
}

export default connect(mapStateToProps)(ResultIndex)

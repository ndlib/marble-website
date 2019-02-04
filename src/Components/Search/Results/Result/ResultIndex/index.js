import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const ResultIndex = ({ searchReducer, index }) => {
  const { page, perpage } = searchReducer
  return (
    <span className='resultnum'>{ (perpage * (page - 1)) + index + 1 }</span>
  )
}

ResultIndex.propTypes = {
  searchReducer: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(ResultIndex)

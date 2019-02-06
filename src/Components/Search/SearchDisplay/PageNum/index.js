import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import PropTypes from 'prop-types'
import PaginationButton from './PaginationButton'

export const PageNum = ({ searchReducer }) => {
  let { page } = searchReducer
  page = parseInt(page, 10) || 1

  return (
    <div className='pagenum'>
      <PaginationButton currentPage={page} prev />
      <div className='pageLink'>Page {page}</div>
      <PaginationButton currentPage={page} />
    </div>
  )
}

export const mapStateToProps = (state) => {
  return { ...state }
}

PageNum.propTypes = {
  searchReducer: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(PageNum)

import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import PropTypes from 'prop-types'
import PaginationButton from './PaginationButton'

export const PageNum = ({ searchReducer }) => {
  let { nextpage, page } = searchReducer
  page = parseInt(page, 10) || 1

  const pageprev = (page > 1)
    ? <PaginationButton label='&lt;' targetPage={page - 1} />
    : ''

  const pagenav = <div className='pageLink'>Page {page}</div>

  const pagenext = nextpage ? <PaginationButton label='&gt;' targetPage={page + 1} /> : ''

  return (
    <div className='pagenum'>
      {pageprev}{pagenav}{pagenext}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { ...state }
}

PageNum.propTypes = {
  searchReducer: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(PageNum)

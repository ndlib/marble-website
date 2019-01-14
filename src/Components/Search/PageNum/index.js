import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import { updatePage } from 'Store/actions/searchActions'

let pagenav = ''
let pageprev = ''
let pagenext = ''
export const PageNum = ({ dispatch, nextpage, page, terms, perpage, history }) => {
  if (page > 1) {
    pageprev = <button className='pageLink' onClick={() => changePage(terms, history, dispatch, perpage, (parseInt(page, 10) - 1))}> &lt; </button>
  } else {
    pageprev = ''
  }
  if (page !== undefined) {
    pagenav = <div className='pageLink'>Page {page}</div>
  }
  if (nextpage) {
    pagenext = <button className='pageLink' onClick={() => changePage(terms, history, dispatch, perpage, (parseInt(page, 10) + 1))}> &gt; </button>
  } else {
    pagenext = ''
  }
  return (
    <React.Fragment>
      <div className='pagenum'>
        {pageprev}{pagenav}{pagenext}
      </div>
    </React.Fragment>
  )
}

const changePage = (terms, history, dispatch, perpage, pageNum) => {
  (history.push('/search?terms=' + terms + '&perpage=' + perpage + '&page=' + pageNum))
  dispatch(updatePage(perpage, terms, pageNum))
}

const mapStateToProps = (state) => {
  return {
    perpage: state.searchReducer.perpage,
    nextpage: state.searchReducer.nextpage,
    page: state.searchReducer.page,
    terms: state.searchReducer.terms,
  }
}

PageNum.propTypes = {
  dispatch: PropTypes.func,
  nextpage: PropTypes.bool,
  page: PropTypes.number,
  terms: PropTypes.string,
  perpage: PropTypes.string,
  history: PropTypes.object,
}

export default withRouter(connect(mapStateToProps)(PageNum))

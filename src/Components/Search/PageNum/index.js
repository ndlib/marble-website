import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.css'
import { withRouter } from 'react-router'

import { changePage } from 'Store/actions/searchActions'

let pagenav = ''
let pageprev = ''
let pagenext = ''
export const PageNum = ({ dispatch, nextpage, page, terms, perpage, history }) => {
  console.log(perpage)
  if (page > 1) {
    pageprev = <div className='pageLink' onClick={e => nextPage(e, terms, history, dispatch, perpage, (parseInt(page) - 1))}> &lt; </div>
  } else {
    pageprev = ''
  }
  if (page !== undefined) {
    pagenav = <div className='pageLink'>Page {page}</div>
  }
  if (nextpage) {
    pagenext = <div className='pageLink' onClick={e => nextPage(e, terms, history, dispatch, perpage, (parseInt(page) + 1))}> &gt; </div>
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

const nextPage = (e, terms, history, dispatch, perpage, pageNum) => {
  (history.push('/search?terms=' + terms + '&perpage=' + perpage + '&page=' + pageNum))
  dispatch(changePage(perpage, terms, pageNum))
}

const mapStateToProps = (state) => {
  return {
    perpage: state.searchReducer.perpage,
    nextpage: state.searchReducer.nextpage,
    pageindex: state.searchReducer.pageindex,
    terms: state.searchReducer.terms,
  }
}

export default withRouter(connect(mapStateToProps)(PageNum))

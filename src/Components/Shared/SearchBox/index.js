import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import searchUrl from 'Functions/searchUrl'
import searchImage from './search.png'
import { submitSearch } from 'Store/actions/searchActions'
import './style.css'

class SearchBox extends Component {
  componentDidMount () {
    const values = queryString.parse(this.props.location.search)
    this.props.dispatch(submitSearch(values.perpage, values.terms, values.page))
  }

  componentDidUpdate (prevProps) {
    const values = queryString.parse(this.props.location.search)
    if (this.props.location !== prevProps.location) {
      this.props.dispatch(submitSearch(values.perpage, values.terms, values.page))
    }
  }

  render () {
    let input
    const { terms, history, searchReducer } = this.props
    const { perpage, view } = searchReducer

    return (
      <div id='SearchComponent' >
        <div id='Search'>
          <button id='SearchSubmit' onClick={
            () => {
              pushHistory(history, input.value, perpage, view)
            }
          }><img id='SearchIMG' src={searchImage} alt='Search' value='submit' /></button>
          <input
            ref={node => (input = node)}
            type='text'
            id='Searchbar'
            placeholder={
              !terms ? 'Search the Collection' : terms}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                pushHistory(history, input.value, perpage, view)
              }
            }}
          />
        </div>
        <div id='AdvancedSearch'>
          <a href='*'>Advanced Search</a>
        </div>
      </div>
    )
  }
}

SearchBox.propTypes = {
  terms: PropTypes.string,
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
  searchReducer: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export const pushHistory = (history, terms, perpage, view) => {
  history.push(searchUrl(terms, perpage, 1, view))
}
const mapStateToProps = (state) => {
  return { ...state }
}
export default withRouter(connect(mapStateToProps)(SearchBox))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import queryString from 'query-string'
import PropTypes from 'prop-types'

import SearchBox from './SearchBox'
import ResultsDisplay from './ResultsDisplay'
import { submitSearch } from 'Store/actions/searchActions'

class Search extends Component {
  componentDidMount () {
    const values = queryString.parse(this.props.location.search)
    const { dispatch } = this.props
    dispatch(submitSearch(values.perpage, values.terms, values.page))
    console.log(this.props)
  }
  componentWillReceiveProps (nextProps) {
    const values = queryString.parse(this.props.location.search)
    const { dispatch } = this.props
    if (this.props.match !== nextProps.match) {
      this.props.dispatch(submitSearch(values.perpage, values.terms, values.page))
    }
  }
  render () {
    let values = queryString.parse(this.props.location.search)
    return (
      <React.Fragment>
        <SearchBox Searchbar={values.terms} />
        <ResultsDisplay />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  if (ownProps.location.search) {
    let values = queryString.parse(ownProps.location.search)
    let terms = values.terms || stateProps.searchReducer.terms
    let page = values.page || stateProps.searchReducer.page
    let perpage = values.perpage || stateProps.searchReducer.perpage
  }
  return { ...stateProps, ...dispatchProps, ...ownProps }
}

Search.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Search))

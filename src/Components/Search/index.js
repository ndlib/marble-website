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
    const values = queryString.parse(nextProps.location.search)
    const { dispatch } = this.props
    if (this.props.location !== nextProps.location) {
      console.log(nextProps)
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

Search.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
}

export default withRouter(connect(mapStateToProps)(Search))

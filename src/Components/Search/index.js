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
    this.props.dispatch(submitSearch(values.perpage, values.terms, values.page))
  }

  componentDidUpdate (prevProps) {
    const values = queryString.parse(this.props.location.search)
    if (this.props.location !== prevProps.location) {
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

Search.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default withRouter(connect(mapStateToProps)(Search))

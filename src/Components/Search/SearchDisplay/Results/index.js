import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import typy from 'typy'
import NotFound from 'Components/Shared/NotFound'
import Result from './Result'

import './style.css'

export const Results = ({ searchReducer }) => {
  if (typy(searchReducer, 'results.docs').safeObject) {
    return searchReducer.results.docs.map((doc, index) => {
      return (
        <Result
          key={index}
          doc={doc}
          index={index}
        />
      )
    })
  }
  return <NotFound title='No Results Were Found' message='No matching search results were found.' />
}

export const mapStateToProps = (state) => {
  return { ...state }
}

Results.propTypes = {
  searchReducer: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(Results)

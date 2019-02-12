import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import searchUrl from 'Functions/searchUrl'
import './style.css'
import { repo, format, language, options } from 'Configurations/Search/facets'
export const Facets = ({ searchReducer }) => {
  return (
    <div className='facets'>
      <Select
        options={repo}
        placeholder='Repository'
        className='facet'
      />
      <Select
        options={format}
        placeholder='Format'
        className='facet'
      />
      <Select
        options={options}
        placeholder='Creation'
        className='facet'
      />
      <div className='facet'>Date
        <div className='date'>From <input type='text' /></div>
        <div className='date'>To <input type='text' /></div>
      </div>
      <Select
        options={language}
        placeholder='Language'
        className='facet'
      />
      <div className='facet'><input type='checkbox' />On View</div>
      <div className='facet'><input type='checkbox' />Public Domain</div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return { ...state }
}

export const handleChange = (e, terms, history) => {
  history.push(searchUrl(terms, e.value, 1))
}

Facets.propTypes = {
  searchReducer: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps)(Facets))

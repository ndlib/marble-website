import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import searchUrl from 'Functions/searchUrl'
import './style.css'

const repo = [
  { value: 'RBSC', label: 'Rare Books and Special Collections Department' },
  { value: 'Snite', label: 'Snite Museum of Art' },
  { value: 'Archives', label: 'University Archives' },
]

const format = [
  { value: 'Book', label: 'Book' },
  { value: 'DA', label: 'Decorative Arts' },
  { value: 'Ephemera', label: 'Ephemera' },
  { value: 'Ethno', label: 'Ethnographic' },
  { value: 'Manuscript', label: 'Manuscript' },
  { value: 'Painting', label: 'Painting' },
  { value: 'Photo', label: 'Photograph' },
  { value: 'Sculpture', label: 'Sculpture' },
]

const options = [

]

export const Facets = ({ searchReducer }) => {
  let { terms, view } = searchReducer
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
      <Select
        options={options}
        placeholder='Date'
        className='facet'
      />
      <Select
        options={options}
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

export const handleChange = (e, terms, history, view) => {
  history.push(searchUrl(terms, e.value, 1, view))
}

Facets.propTypes = {
  searchReducer: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps)(Facets))

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const FilterTab = ({ active, label, target }) => {
  return (
    <Link
      to={target}
      className={active ? 'filterTab active' : 'filterTab'}
    >
      {label}
    </Link>
  )
}

FilterTab.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
}
export default FilterTab

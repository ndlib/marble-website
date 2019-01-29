import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'

import FilterTabBar from './FilterTabBar'
import CardList from 'Components/Shared/CardList'
import './style.css'

const Browse = ({ currentManifest }) => {
  const items = typy(currentManifest, 'data.collections').safeObject
  return (
    <React.Fragment>
      <FilterTabBar />
      <CardList
        items={items}
        className='browseCard'
      />
    </React.Fragment>
  )
}

Browse.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}

export default Browse

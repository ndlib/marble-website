import React from 'react'
import PropTypes from 'prop-types'
import typy from 'typy'

import CardList from 'Components/Shared/CardList'

const Browse = ({ currentManifest }) => {
  const items = typy(currentManifest, 'data.collections').safeObject
  return (
    <React.Fragment>
      <CardList items={items} />
    </React.Fragment>
  )
}

Browse.propTypes = {
  currentManifest: PropTypes.object.isRequired,
}

export default Browse

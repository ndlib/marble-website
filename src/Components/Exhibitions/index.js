import React from 'react'
import PropTypes from 'prop-types'
import ManifestCardList from 'Components/Shared/ManifestCardList'
import './style.css'
import { items } from 'Configurations/Exhibitions'
const Exhibitions = () => {
  return (
    <React.Fragment>
      <ManifestCardList
        items={items}
        className='exhibitionCard'
      />
    </React.Fragment>
  )
}

export default Exhibitions

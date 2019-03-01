import React from 'react'
import './style.css'
import { items } from 'Configurations/Exhibitions'
import ManifestCardList from 'Components/Shared/ManifestCardList'

const Exhibitions = () => {
  return (
    <React.Fragment>
      <h2>Exhibitions</h2>
      <div className='exhibitionCardList'>
        <ManifestCardList
          items={items}
          className='exhibitionCard'
        />
      </div>
    </React.Fragment>
  )
}

export default Exhibitions

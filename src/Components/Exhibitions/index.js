import React from 'react'
import './style.css'
import { items } from 'Configurations/Exhibitions'
import ManifestCardList from 'Components/Shared/ManifestCardList'

const Exhibitions = () => {
  return (
    <main id='main'>
      <article>
        <h1 className='staticTitle'>Exhibits</h1>
        <div className='exhibitionCardList'>
          <ManifestCardList
            items={items}
            className='exhibitionCard'
          />
        </div>
      </article>
    </main>
  )
}

export default Exhibitions

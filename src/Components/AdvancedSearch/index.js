import React from 'react'
import './style.css'

const AdvancedSearch = () => {
  return (
    <div className='advancedSearch'>
      <h3>Advanced Search</h3>
      <div className='ObjectNumber'>
        <label>Object Number</label> <input type='text' />
      </div>
      <div className='title'>
        <label>Title</label> <input type='text' />
      </div>
      <div className='creator'>
        <label>Creator</label> <input type='text' />
      </div>
      <div className='searchdate'>
        <label>Date</label> <input type='text' />
      </div>
      <div className='keyword'>
        <label>Keyword(s)</label> <input type='text' />
      </div>
      <div className='owner'>
        <label>Owner</label> <input type='text' />
      </div>
      <button alt='Search'>Search</button>
    </div>
  )
}

export default AdvancedSearch

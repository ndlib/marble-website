import React from 'react'
import './style.css'

const AdvancedSearch = () => {
  return (
    <div className='advancedSearch'>
      <h3>Advanced Search</h3>
      <div className='title'>
        <label>Title</label> <input type='text' />
      </div>
      <div className='creator'>
        <label>Creator</label> <input type='text' />
      </div>
      <div className='searchdate'>
        <label>Date</label> <input type='text' />
      </div>
      <div className='format'>
        <label>Format</label> <input type='text' />
      </div>
      <div className='ObjectNumber'>
        <label>Object Number</label> <input type='text' />
      </div>
      <div className='repository'>
        <label>Repository</label>
        <select>
          <option value='snite'>Snite Museum of Art</option>
          <option value='rbsc'>Rare Books and Special Collections</option>
          <option value='archives'>University Archives</option>
        </select>
      </div>
      <button alt='Search'>Search</button>
    </div>
  )
}

export default AdvancedSearch

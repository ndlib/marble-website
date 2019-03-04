import React from 'react'
import './style.css'

const AdvancedSearch = () => {
  return (
    <div className='advancedSearch'>
      <h3>Advanced Search</h3>
      <div className='ObjectNumber'>
        Object Number <input type='text' />
      </div>
      <div className='title'>
        Title <input type='text' />
      </div>
      <div className='creator'>
        Creator <input type='text' />
      </div>
      <div className='searchdate'>
        Date <input type='text' />
      </div>
      <div className='keyword'>
        Keyword(s) <input type='text' />
      </div>
      <div className='owner'>
        Owner <input type='text' />
      </div>
      <button alt='Search'>Search</button>
    </div>
  )
}

export default AdvancedSearch
